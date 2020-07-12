import Knex from 'knex';
import { uuid } from 'uuidv4';

export async function seed(knex: Knex): Promise<void> {
  await knex('users').insert([
    {
      id: uuid(),
      nome: 'Felipe Zanetti',
      email: 'felipeajz@hotmail.com',
      senha: '123456',
    },
    {
      id: uuid(),
      nome: 'Carlos Severino',
      email: 'carlos@gmail.com',
      senha: '123456',
    },
  ]);
}
