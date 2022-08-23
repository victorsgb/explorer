const knex = require('../database/knex');
const AppError = require('../utils/AppError');

const Helpers = require('../utils/helpers');
const { hasDuplicates } = Helpers();

class NotesController {
  async create(request, response) {
    const { title, description, rating, tags } = request.body;
    const user_id = request.user.id;

    // Check if ID is present in database
    const idFound = await knex
      .select('id').from('users')
      .where({ id: user_id }).first();
    if (!idFound) {
      throw new AppError('user-error/id-not-found');
    }

    // Check if tags are distinct, if there are some
    if (hasDuplicates(tags)) {    
      throw new AppError('error-user/not-unique-tags');
    }

    // Check if title is already present in database
    const noteFound = await knex
      .select('title').from('notes')
      .where({ title }).first();
    if (noteFound) {
      throw new AppError('user-error/movie-already-registered');
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
        title, description, rating, note_id, user_id, tags: tagsData
      });
    }

  }

  async update(request, response) {
    const { note_id, title, rating, description, tags } = request.body;
    
    const user_id = request.user.id;

    await knex('notes')
      .where({ id: note_id })
      .update({
        title,
        description,
        rating,
        updated_at: knex.fn.now()
    })

    if (tags) {
      await knex('tags').where({ note_id }).delete();

      const tagsData = tags.map(tag => {
        return {
          name: tag,
          note_id,
          user_id,
        }
      });

      await knex('tags').insert(tagsData);
    }

    return response.json();
  }

  async show(request, response) {
    const { id } = request.params;

    const note = await knex('notes').where({ id }).first();

    const tagsFromNote = await knex('tags').where({note_id: id});
    
    return response.json({
      ...note,
      tags: tagsFromNote
    });
  }

  async index(request, response) {
    const { title, tags } = request.query;
    const user_id = request.user.id;

    let notes;
    if (title && !tags) {
      notes = await knex('notes')
        .where({ user_id })
        .whereLike('title', `%${title}%`)
        .groupBy('title');

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
        .groupBy('notes.title');

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
        .groupBy('notes.title');

    } else if (!title && !tags) {
      
      notes = await knex('notes')
        .where({ user_id })
        .groupBy('title');
    }

    const notesWithTags = [];
    for (let note of notes) {
      const tagsFromNote = await knex('tags').where('note_id', note.id);
      notesWithTags.push({
        ...note,
        tags: tagsFromNote
      })
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