export default {
    port: 1337,
    host: 'localhost',
    dbUri: 'mongodb://localhost:27017/bytecheck',
    saltNumber: 10,
    accessTokenTime: '15m',
    refreshTokenTime: '1y',
    privateKey: `-----BEGIN OPENSSH PRIVATE KEY-----
    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
    -----END OPENSSH PRIVATE KEY-----`
};
