import mongoose from 'mongoose';
import config from 'config';
import log from '../logger';

function dbConnect() {
    const dbUri = config.get('dbUri') as string;

    return mongoose
        .connect(dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            log.info('MongoDB Database Connected');
        })
        .catch((error) => {
            log.error('db error', error);
            process.exit(1);
        });
}

export default dbConnect;
