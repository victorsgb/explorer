require('express-async-errors');

const express = require('express');
const app = express();

const AppError = require('../src/utils/AppError');

app.use(express.json());

const routes = require('../src/routes');

app.use(routes);

app.use((error, request, response, next) => {

    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        'status': 'error',
        'message': error.message
      });
    }
    
    console.log(error);
    return response.status(500).json({
      'status': 'error',
      'message': 'Internal Server Error'
    });

});

const PORT = 3334;

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));