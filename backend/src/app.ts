import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import logging from './config/logging';
import config from './config/config';
import routes from './routes/index';

const NAMESPACE = 'Server';
const app = express();

mongoose
    .connect(config.mongo.url, config.mongo.options)
    .then((result) => {
        logging.info(NAMESPACE, 'Connected to MongoDB');
    })
    .catch((error) => {
        logging.error(NAMESPACE, error.message, error);
    });

/** Cors */

const options: cors.CorsOptions = {
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token'],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    preflightContinue: false
};

app.use(cors(options));

/** Logging Middleware */

app.use((req, res, next) => {
    logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
    res.on('finish', () => {
        logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    });
    next();
});

/** Routes */

app.get('/', routes);

app.use((req, res, next) => {
    const error = new Error('Not found');

    return res.status(404).json({
        message: error.message
    });
});

app.listen(config.server.port, () => {
    console.log(`${config.server.hostname} is listening on port ${config.server.port}`);
});
