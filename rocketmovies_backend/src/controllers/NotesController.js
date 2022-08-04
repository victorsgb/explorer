const knex = require('../database/knex');
const AppError = require('../utils/AppError');

const Helpers = require('../utils/helpers');
const { hasDuplicates } = Helpers();

class NotesController {
  async create(request, response) {
    const { title, description, rating, tags } = request.body;
    const { user_id } = request.params;

    // Check if ID is present in database
    const idAlreadyInUse = await knex
      .select('id').from('users')
      .where({ id: user_id }).first();
    if (!idAlreadyInUse) {
      throw new AppError('user-error/id-not-found');
    }

    // Check if tags are distinct, if there are some
    if (hasDuplicates(tags)) {    
      throw new AppError('error-user/not-unique-tags');
    }

    const note_id = await knex('notes').insert({
      title, description, rating, user_id
    });

    if(!tags) {
      return response.json();

    } else {

      const tagsData = tags.map(tag => {
        return {
          name: tag,
          note_id,
          user_id,
        }
      });

      await knex('tags').insert(tagsData);

      return response.json({
        title, description, rating, user_id, tags: tagsData
      });
    }

  }

  async show(request, response) {
    const { id } = request.params;

    const note = await knex('notes').where({ id });

    const tagsFromNote = await knex('tags').where({note_id: id});
    
    return response.json({
      note,
      tags: tagsFromNote
    });
  }

  async index(request, response) {
    const { user_id, title, tags } = request.query;

    let notes;
    if (title && !tags) {
      notes = await knex('notes')
        .where({ user_id })
        .whereLike('title', `%${title}%`)
        .orderBy('title');

    } else if (title && tags) {

      const tagsArray = tags.split(',').map(tag => tag.trim());

      notes = await knex('notes')
        .select([
          'notes.id',
          'notes.title',
          'notes.description',
          'notes.rating',
          'notes.user_id',
          'notes.created_at',
          'notes.updated_at'
        ])
        .where('notes.user_id', user_id)
        .whereLike('notes.title', `%${title}%`)
        .whereIn('tags.name', tagsArray)
        .innerJoin('tags', 'notes.id', 'tags.note_id')
        .orderBy('notes.title');

    } else if (!title && tags) {

      const tagsArray = tags.split(',').map(tag => tag.trim());

      notes = await knex('notes')
        .select([
          'notes.id',
          'notes.title',
          'notes.description',
          'notes.rating',
          'notes.user_id',
          'notes.created_at',
          'notes.updated_at'
        ])
        .where('notes.user_id', user_id)
        .whereIn('tags.name', tagsArray)
        .innerJoin('tags', 'notes.id', 'tags.note_id')
        .orderBy('notes.title');

    } else if (!title && !tags) {
      
      notes = await knex('notes')
        .where({ user_id })
        .orderBy('title');
    }

    const notesWithTags = {};
    for (let note of notes) {
      const tagsFromNote = await knex('tags').where('note_id', note.id);
      notesWithTags[note.id] = note;
      notesWithTags[note.id]['tags'] = tagsFromNote;
    }

    return response.json(notesWithTags);
  }

  async delete(request, response) {
    const { id } = request.params;
    await knex('notes').where({ id }).delete();

    return response.json();
  }

}

module.exports = NotesController;