import { JsonPostRespository } from '@/repositories/post/json-post-repository';
import { drizzleDb } from '.';
import { postsTable } from './schemas';

(async () => {
  const jsonPostRepository = new JsonPostRespository();
  const posts = await jsonPostRepository.findAll();

  try {
    await drizzleDb.delete(postsTable); // ISSO LIMPA A BASE DE DADOS
    await drizzleDb.insert(postsTable).values(posts);
  } catch (e) {
    console.log();
    console.log('Ocorreu um error...');
    console.log();
    console.log();
    console.log(e);
    console.log();
  }
})();
