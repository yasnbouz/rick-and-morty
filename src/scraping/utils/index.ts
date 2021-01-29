import fs from 'fs';
import { join } from 'path';

export const storePath = join(process.cwd(), `src`, `scraping`, `store.json`);
export function storeData(data, path) {
  try {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err);
  }
}

export function loadData(path) {
  try {
    return fs.readFileSync(path, `utf8`);
  } catch (err) {
    console.error(err);
    return false;
  }
}
