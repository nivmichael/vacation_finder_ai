import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/api/hello', (_req, res) => {
  res.send('Hello World');
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
