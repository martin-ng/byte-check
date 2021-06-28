import express from 'express';
import config from 'config';
import log from './logger';

import { deserializeUser } from './middleware';
import dbConnect from './db/connect';
import routes from './routes';

const port = config.get('port') as number;
const host = config.get('host') as string;

const app = express();
app.use(deserializeUser);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', routes);

app.listen(port, host, () => {
    log.info(`Server is listening on http://${host}:${port}`);

    dbConnect();
});
