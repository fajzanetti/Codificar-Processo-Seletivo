import { Router } from 'express';
import { hash } from 'bcryptjs';
import { uuid } from 'uuidv4';

import knex from '../database/connection';
import dateToDMYHM from '../utils/formatDate';

const usersRouter = Router();

interface userData {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar: string;
  createdAt: string;
  updatedAt: string;
}

usersRouter.get('/', async (request, response) => {
  const users = await knex<userData>('users').select('*');

  return response.json(users);
});

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const checkUserExists = await knex<userData>('users')
    .where('email', email)
    .first();

  if (checkUserExists) {
    return response.json({ message: 'Usuário já cadastrado!' });
  }

  const hashedPassword = await hash(password, 8);

  const date = dateToDMYHM(new Date());

  const user = {
    id: uuid(),
    name,
    email,
    password: hashedPassword,
    avatar: '../../assets/avatar.png',
    createdAt: date,
    updatedAt: date,
  } as userData;

  await knex('users').insert(user);

  delete user.password;

  return response.json({ user });
});

export default usersRouter;
