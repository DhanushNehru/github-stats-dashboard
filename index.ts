import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.status(200).json({
    message: 'GitHub Stats API is running!',
    timestamp: new Date().toISOString(),
  });
}
