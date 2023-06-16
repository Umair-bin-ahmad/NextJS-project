// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default async function handler(req, res) {
  let data = await fs.promises.readdir("users");
  let myFile;
  let allItems = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    console.log(item);
    myFile = await fs.promises.readFile(('users/' + item), 'utf-8')
    allItems.push(JSON.parse(myFile));
  }
  res.status(200).json(allItems);
}
