const knex = require('../database/knex');
const { hash, compare } = require('bcryptjs');
const AppError = require('../utils/AppError');

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    if (!name) {
      throw new AppError('user-error/empty-name');
    }
    
    if (!email) {
      throw new AppError('user-error/empty-email');
    }

    if (!password) {
      throw new AppError('user-error/empty-password');
    }

    // Check if email is already present in database
    const emailAlreadyInUsePromise = await knex
      .select(['id', 'email']).from('users')
      .where({ email});

    const emailAlreadyInUse = emailAlreadyInUsePromise
      .length !== 0;

    if (emailAlreadyInUse) {
      throw new AppError('user-error/email-in-use');
    }

    const hashedPassword = await hash(password, 8);

    const user = await knex('users').insert({
      name, email, password: hashedPassword
    });
  
    response.json();
  }

  async update(request, response) {
    const { name, email, password, new_password } = request.body;
    const id = request.user.id;
  
    // Check if ID is already present in database
    const idAlreadyInUse = await knex
      .select('id').from('users')
      .where({ id }).first();
    if (!idAlreadyInUse) {
      throw new AppError('user-error/id-not-found');
    }

    if (email) {
      // Check if email is already present in database
      const emailAlreadyInUsePromise = await knex
        .select(['id', 'email']).from('users')
        .where({ email});
  
      const emailAlreadyInUse = emailAlreadyInUsePromise
        .filter(el => el.id !== Number(id))
        .length;
  
      if (emailAlreadyInUse) {
        throw new AppError('user-error/email-in-use');
      }
    }

    if (email && !password) {

      const registeredEmail = await knex
        .select('email').from('users')
        .where({ id }).first();

      const emailChanged = email !== registeredEmail.email;

      if (emailChanged) {
        throw new AppError('user-error/email-update-trial-without-password');
      }      
    }

    // Check if new password has been provided when old password is provided
    if (password && !new_password) {
      throw new AppError('user-error/empty-new-password');
    }

    if (password && new_password) {

      // Check if user matched its old password before updating
      const old = await knex
        .select('password').from('users')
        .where({ id }).first();
  
      const passwordMatches = await compare(password, old.password);
  
      if (!passwordMatches) {
        throw new AppError('user-error/wrong-password');
      }
  
      // Passed all tests
      const hashedPassword = await hash(new_password, 8);

      await knex('users')
        .where({ id })
        .update({ name, email, password: hashedPassword, updated_at: knex.fn.now() });
      
      return response.json();
    }

    await knex('users')
    .where({ id })
    .update({ name, updated_at: knex.fn.now() });

    return response.json();

  }
}

module.exports = UsersController;