import fs from 'fs';
import parseCsv from '~/utils/parse-csv.server';

const parsePosts = async () => {
  const posts = fs.readFileSync('./public/posts.csv');
  const records = await parseCsv(posts, {delimiter: ',', from_line: 2});
  return records.map(record => record[7]);
};

export default parsePosts;
