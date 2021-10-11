import { createReadStream } from 'fs';

export const readStream = stream => {
  const buffer = [];
  return new Promise((resolve, reject) => {
    stream
      .on('error', reject)
      .on('data', chunk => buffer.push(chunk))
      .on('end', () => resolve(Buffer.concat(buffer)))
  });
};

export const parse = data => {
  const results = [];
  const lines = data.split(/\n/);
  for (const line of lines.filter(Boolean)) {
    try {
      const obj = JSON.parse(line);
      results.push(obj);
    } catch (e) {
      console.log(line);
    }
  }
  return results;
};

export const parseFile = async filename => {
  const stream = createReadStream(filename);
  const data = await readStream(stream);
  return parse(data.toString());
};