const { Router } = require('express');

const sessionsRoutes = require('./sessions.routes');

const userRoutes = require('./users.routes');
const notesRoutes = require('./notes.routes');
const tagsRoutes = require('./tags.routes');

const router = Router();

const routes = [
  router.use('/sessions', sessionsRoutes),

  router.use('/users', userRoutes),
  router.use('/notes', notesRoutes),
  router.use('/tags', tagsRoutes)
];

module.exports = routes;