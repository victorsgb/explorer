const { Router } = require('express');
const NotesController = require('../controllers/NotesController');

const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const notesController = new NotesController();

const notesRoutes = Router();

// Passing auth middleware to all routes '/notes'
notesRoutes.use(ensureAuthenticated);

// Route to index all notes from user
notesRoutes.get('/', notesController.index);

// Route to enable user to create a new note 
notesRoutes.post('/', notesController.create);

// Route to enable user to update a given note
notesRoutes.put('/', notesController.update);

// Route to retrieve intel of a given note
notesRoutes.get('/:id', notesController.show);

// Route to enable user to delete a given note
notesRoutes.delete('/:id', notesController.delete);

module.exports = notesRoutes;