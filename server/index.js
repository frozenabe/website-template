require('dotenv').config();
const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');

const mailer = require('./router/mailer');

const PORT = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json({ limit: '50mb' }));
    server.use(cors());
    server.use(helmet());
    if (!dev) {
      server.use(compression());
    }
    server.set('trust proxy', 1);
    server.use('/api/mailer', mailer);

    server.get('*', (req, res) => handle(req, res));
    server.listen(PORT, (err) => {
      if (err) {
        throw err;
      }
      /* eslint no-console: 0 */
      console.log(`> Ready on http://localhost:${PORT}`);
    });
  });
