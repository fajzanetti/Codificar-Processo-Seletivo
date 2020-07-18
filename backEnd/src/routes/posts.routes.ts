import { Router } from 'express';
import { uuid } from 'uuidv4';

import knex from '../database/connection';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import dateToDMYHM from '../utils/formatDate';

const postsRouter = Router();

postsRouter.use(ensureAuthenticated);

interface postData {
  id: string;
  text: string;
  like: number;
  unlike: number;
  author: string;
  authorId: string;
  createdAt: string;
  updatedAt: string;
}

interface userData {
  id: string;
  name: string;
}
// Rota para listar todos os "posts" da API
postsRouter.get('/', async (request, response) => {
  const users = await knex('posts').select('*').orderBy('updatedAt', 'asc');

  return response.json(users);
});

// Rota para listar somente os "posts" do usuário que estiver autenticado no app
postsRouter.get('/myPosts', async (request, response) => {
  const { id } = request.user;
  const users = await knex('posts')
    .select('*')
    .where('authorId', id)
    .orderBy('updatedAt', 'asc');

  return response.json(users);
});

// Rota para criar um novo "post"
postsRouter.post('/', async (request, response) => {
  const { text } = request.body;
  const { id } = request.user;

  if (text.length > 280) {
    return response.json({ message: 'Text maior que 280 caracteres.' });
  }

  const user = await knex('users').where('id', id).first();

  if (!user) {
    return response.json({ message: 'Usuário não existe.' });
  }
  const { name } = user as userData;

  const date = dateToDMYHM(new Date());

  const post = {
    id: uuid(),
    text,
    like: 0,
    unlike: 0,
    author: name,
    authorId: id,
    createdAt: date,
    updatedAt: date,
  } as postData;

  await knex('posts').insert(post);

  return response.json({ post });
});

// Rota para dar like, somente por outros usuários que não seja o autor
postsRouter.put('/like/:idPost', async (request, response) => {
  const { likeAdd } = request.body;
  const { idPost } = request.params;
  const idUser = request.user;

  const checkPostExists = await knex('posts').where('id', idPost).first();

  if (!checkPostExists) {
    return response.json({ message: 'Post não existe.' });
  }

  const { authorId, like } = checkPostExists as postData;

  if (authorId === idUser.id) {
    return response.json({ message: 'Você não pode curtir seu próprio post.' });
  }

  await knex('posts')
    .where('id', idPost)
    .update('like', like + likeAdd);

  const postUp = await knex('posts').where('id', idPost).first();

  return response.json(postUp);
});

// Rota para da deslike, somente por outros usuários que não seja o autor
postsRouter.put('/unlike/:idPost', async (request, response) => {
  const { unlikeAdd } = request.body;
  const { idPost } = request.params;
  const idUser = request.user;

  const checkPostExists = await knex('posts').where('id', idPost).first();

  if (!checkPostExists) {
    return response.json({ message: 'Post não existe.' });
  }

  const { authorId, unlike } = checkPostExists as postData;

  if (authorId === idUser.id) {
    return response.json({ message: 'Você não pode curtir seu próprio post.' });
  }

  await knex('posts')
    .where('id', idPost)
    .update('unlike', unlike + unlikeAdd)
    .select('*');

  const postUp = await knex('posts').where('id', idPost).first();

  return response.json(postUp);
});

// Rota para alterar um post somente pelo autor autenticado no app
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

  const date = dateToDMYHM(new Date());

  await knex('posts')
    .where('id', idPost)
    .update('updatedAt', date)
    .update('text', text);

  const postUp = await knex('posts').where('id', idPost).first();

  return response.json(postUp);
});

// Rota para deletar um "post", somente pelo autor autenticado no app
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
