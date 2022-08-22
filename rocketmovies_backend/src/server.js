require('express-async-errors');

const cors = require('cors');
const express = require('express');
const routes = require('../src/routes');

const AppError = require('../src/utils/AppError');

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);

app.use((error, request, response, next) => {

  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      'status': 'error',
      'message': error.message
    });
  }

  return response.status(500).json({
    'status': 'error',
    'message': 'Internal server error'
  });

});

const PORT = 3335;

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});