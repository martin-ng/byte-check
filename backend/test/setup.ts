import mongoose from 'mongoose';

beforeAll(async () => {
    const mongoUri: string = 'mongodb://localhost:27017/bytecheck-test';

    mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
});
// function beforeAll(arg0: () => Promise<void>) {
//     throw new Error('Function not implemented.');
// }

// function afterAll(arg0: () => Promise<void>) {
//     throw new Error('Function not implemented.');
// }
