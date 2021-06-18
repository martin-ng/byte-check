import express from 'express';
import logging from './config/logging';
import config from './config/config';

const NAMESPACE = 'Server';
const app = express();

/** Logging Middleware */

app.use((req, res, next) => {
    logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    });

    next();
});

app.get('/', (req, res) => {
    res.send('hi world');
});

app.use((req, res, next) => {
    const error = new Error('Not found');

    return res.status(404).json({
        message: error.message
    });
});

app.listen(config.server.port, () => {
    console.log(`${config.server.hostname} is listening on port ${config.server.port}`);
});
