import Knex from 'knex';
import { uuid } from 'uuidv4';
import knex from '../connection';
import dateToDMYHM from '../../utils/formatDate';

export async function seed(knexC: Knex): Promise<void> {
  const { id: idUser1, name: nameUser1 } = await knex('users')
    .select('*')
    .where('email', 'felipeajz@hotmail.com')
    .first();
  const { id: idUser2, name: nameUser2 } = await knex('users')
    .select('*')
    .where('email', 'carlos@gmail.com')
    .first();
  await knexC('posts').insert([
    {
      id: uuid(),
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et molestie nulla. Duis at diam ipsum. Cras porta dictum justo, vel consequat eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique non.',
      author: nameUser1,
      authorId: idUser1,
      like: 0,
      unlike: 0,
      createdAt: dateToDMYHM(new Date()),
      updatedAt: dateToDMYHM(new Date()),
    },
    {
      id: uuid(),
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et molestie nulla. Duis at diam ipsum. Cras porta dictum justo, vel consequat eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique non.',
      author: nameUser2,
      authorId: idUser2,
      like: 0,
      unlike: 0,
      createdAt: dateToDMYHM(new Date()),
      updatedAt: dateToDMYHM(new Date()),
    },
    {
      id: uuid(),
      text: 'Texto pequeno 1',
      author: nameUser1,
      authorId: idUser1,
      like: 0,
      unlike: 0,
      createdAt: dateToDMYHM(new Date()),
      updatedAt: dateToDMYHM(new Date()),
    },
    {
      id: uuid(),
      text: 'Texto pequeno 2',
      author: nameUser1,
      authorId: idUser1,
      like: 0,
      unlike: 0,
      createdAt: dateToDMYHM(new Date()),
      updatedAt: dateToDMYHM(new Date()),
    },
    {
      id: uuid(),
      text: 'Texto pequeno 2',
      author: nameUser2,
      authorId: idUser2,
      like: 0,
      unlike: 0,
      createdAt: dateToDMYHM(new Date()),
      updatedAt: dateToDMYHM(new Date()),
    },
    {
      id: uuid(),
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et molestie nulla. Duis at diam ipsum. Cras porta dictum justo, vel consequat eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique non.',
      author: nameUser1,
      authorId: idUser1,
      like: 0,
      unlike: 0,
      createdAt: dateToDMYHM(new Date()),
      updatedAt: dateToDMYHM(new Date()),
    },
  ]);
}
