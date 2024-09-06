import { randomUUID } from "crypto";
import { sql } from './db.js';

//Tudo que tem comunicação com o banco de dados
export class DatabasePostgres { 
  async create(video) {
    const videoID = randomUUID();
    const { title, description, duration } = video;

    await sql`insert into videos (id, title, description, duration) 
              values (${videoID}, ${title}, ${description}, ${duration})`;
  }

  async read(search) {
    let videos;
    videos = await sql`select * from videos`;
    return videos;
  }

  async update(id, video) {
    const { title, description, duration } = video;
    await sql`update videos 
              set title = ${title}, description = ${description}, duration = ${duration} 
              where id = ${id}`;
  }

  async delete(id) {
    await sql`delete from videos where id = ${id}`;
  }
}


// function saudacao(nome) {
//   return 'Olá, ' + nome + '!';
// }

// console.log(saudacao('João')); // Saída: Olá, João!