import express from 'express';
import path from 'path';
import cors from 'cors';
import { DisplayMessage } from '../common/Types';

//
// Parameters
//

const PORT = 3000;
const DIST_PATH = path.resolve(__dirname, '..');

//
// Setup
//

const app = express();
app.use(cors());

//
// Static files for website
//

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.resolve(DIST_PATH, 'website') });
});

app.use('/website', express.static(path.resolve(DIST_PATH, 'website')));

//
// API for extension
//

app.get('/api/get_display_message', async (req, res) => {
  const message: DisplayMessage = { message: 'Hello from React Chrome Extension!' };
  res.json(message);
});

//
// Start server
//

app.listen(PORT);
console.log(`Listening on http://localhost:${PORT}`);
