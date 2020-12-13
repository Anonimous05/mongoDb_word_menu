module.exports = {
    uploadPath: `${__dirname}/public/uploads`,
    database: 'mongodb://localhost/categories',
    databaseOptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    },
    port: 8000
};