import { Router } from 'express';
import { hash } from 'bcryptjs';
import { uuid } from 'uuidv4';

import knex from '../database/connection';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const postsRouter = Router();

postsRouter.use(ensureAuthenticated);

interface postData {
  id: string;
  text: string;
  author: string;
  authorId: string;
  createdAt: Date;
}

interface userData {
  id: string;
  name: string;
}

postsRouter.get('/', async (request, response) => {
  const users = await knex('posts').select('*');

  return response.json(users);
});

postsRouter.get('/myPosts', async (request, response) => {
  const { id } = request.user;
  const users = await knex('posts').select('*').where('authorId', id);

  return response.json(users);
});

postsRouter.post('/', async (request, response) => {
  const { text } = request.body;
  const { id } = request.user;

  if (text.length >= 280) {
    throw new Error('Text maior que 280 caracteres.');
  }

  const user = await knex('users').where('id', id).first();

  if (!user) {
    return response.json({ message: 'Usuário não existe.' });
  }
  const { name } = user as userData;

  const post = {
    id: uuid(),
    text,
    author: name,
    authorId: id,
  } as postData;

  await knex('posts').insert(post);

  return response.json({ post });
});

postsRouter.put('/:idPost', async (request, response) => {
  const { text } = request.body;
  const { idPost } = request.params;
  const idUser = request.user;

  const checkPostExists = await knex('posts').where('id', idPost).first();

  if (!checkPostExists) {
    return response.json({ message: 'Post não existe.' });
  }

  const { authorId } = checkPostExists as postData;

  if (authorId !== idUser.id) {
    return response.json({ message: 'Você não pode editar este post.' });
  }

  await knex('posts').where('id', idPost).update('text', text);

  return response.json({ text });
});

postsRouter.delete('/:idPost', async (request, response) => {
  const { idPost } = request.params;
  const idUser = request.user;

  const checkPostExists = await knex('posts').where('id', idPost).first();

  if (!checkPostExists) {
    return response.json({ message: 'Post não existe.' });
  }

  const { authorId } = checkPostExists as postData;

  if (authorId !== idUser.id) {
    return response.json({ message: 'Você não pode deletar este post.' });
  }

  await knex('posts').where({ id: idPost }).delete();

  return response.json({ message: 'Post deletado com sucesso.' });
});

export default postsRouter;
