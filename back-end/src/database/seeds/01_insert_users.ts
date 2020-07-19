import Knex from 'knex';
import { hash } from 'bcryptjs';
import { uuid } from 'uuidv4';
import dateToDMYHM from '../../utils/formatDate';

export async function seed(knex: Knex): Promise<void> {
  await knex('users').insert([
    {
      id: uuid(),
      name: 'Felipe Zanetti',
      email: 'felipeajz@hotmail.com',
      avatar: '',
      password: await hash('123456', 8),
      createdAt: dateToDMYHM(new Date()),
      updatedAt: dateToDMYHM(new Date()),
    },
    {
      id: uuid(),
      name: 'Carlos Severino',
      email: 'carlos@gmail.com',
      avatar: '',
      password: await hash('654321', 8),
      createdAt: dateToDMYHM(new Date()),
      updatedAt: dateToDMYHM(new Date()),
    },
  ]);
}
