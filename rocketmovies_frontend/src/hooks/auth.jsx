import  { useState, useEffect } from 'react';
import { createContext, useContext } from 'react';

import { api } from '../services/api';

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  
  async function signIn({ email, password }) {
    
    try {
      const response = await api.post('/sessions', { email, password});
      const { user, token } = response.data;
     
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user, token });

      localStorage.setItem('@rocketmovies:user', JSON.stringify(user));
      localStorage.setItem('@rocketmovies:token', token);

    } catch(error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Server unavailable. You could not login.');
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@rocketmovies:user');
    localStorage.removeItem('@rocketmovies:token');

    setData({});
  }

  async function updateProfile({ user, avatarFile }) {
    try {

      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append('avatar', avatarFile);

        const response = await api.patch('/users/avatar', fileUploadForm);
        user.avatar = response.data.avatar;

      }

      await api.put('/users', user);

      localStorage.setItem('@rocketmovies:user', JSON.stringify(user));
      setData({ user, token: data.token });
      alert('Profile data updated!');

    } catch(error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Server unavailable. You could not update your profile data.');
      }
    }
  }

  async function fetchNotes({ user, search = '' }) {

    // First try to search by title
    try {
      const response = await api.get(`/notes?user_id=${user.id}&title=${search}`);
  
      const notes = response.data;
      
      notes.length > 0 ? user.notes = notes : user.notes = undefined;
  
      localStorage.setItem('@rocketmovies:user', JSON.stringify(user));
      setData({ user, token: data.token });

    } catch(error) {
        user.notes = undefined;

        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert('Server unavailable. You could not query data from user.');
        }
    }

    // Then, if no title selected, try to search by tag
    if (typeof user.notes === 'undefined') {
      try {
        const response = await api.get(`/notes?user_id=${user.id}&tags=${search}`);
    
        const notes = response.data;
        notes.length > 0 ? user.notes = notes : user.notes = undefined;
    
        localStorage.setItem('@rocketmovies:user', JSON.stringify(user));
        setData({ user, token: data.token });
  
      } catch(error) {
          user.notes = undefined;
  
          if (error.response) {
            alert(error.response.data.message);
          } else {
            alert('Server unavailable. You could not query data from user.');
          }
      }
       
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@rocketmovies:token');
    const user = localStorage.getItem('@rocketmovies:user');

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({
        token,
        user: JSON.parse(user)
      });
    }
  }, []);

  return (
    <AuthContext.Provider 
      value={{
        signIn,
        signOut,
        updateProfile,
        fetchNotes,
        user: data.user 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };