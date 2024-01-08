const env = process.env;
const db = {
    URL: env.DATABASE_URL,
};
module.exports = db;