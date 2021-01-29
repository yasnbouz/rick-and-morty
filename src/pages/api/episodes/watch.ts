import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import { loadData, storePath } from '@/scraping/utils';
import { ScrapData } from '@/scraping';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!fs.existsSync(storePath)) {
      await ScrapData();
    }
    const data = loadData(storePath);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send({ error: `Scraping failed!` });
  }
};
