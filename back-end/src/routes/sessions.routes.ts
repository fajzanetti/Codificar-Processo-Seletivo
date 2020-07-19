import { Router } from 'express';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import authConfig from '../config/auth';
import knex from '../database/connection';

const sessionsRouter = Router();

interface userData {
  id: string;
  name: string;
  email: string;
  password: string;
}

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const user = await knex<userData>('users').where('email', email).first();

  if (!user) {
    return response.status(401).json({ message: 'Email ou senha incorretos.' });
  }

  const passwordMatched = await compare(password, user.password);

  if (!passwordMatched) {
    return response.status(401).json({ message: 'Email ou senha incorretos.' });
  }

  const { secret, expiresIn } = authConfig.jwt;

  const token = sign({}, secret, {
    subject: user.id,
    expiresIn,
  });

  delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
