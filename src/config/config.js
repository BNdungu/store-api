module.exports = {
    MONGO_IP : process.env.MONGO_IP || 'mongodb',
    MONGO_PORT : process.env.MONGO_PORT || 27017,
    MONGO_USER : process.env.MONGO_USER || 'ndungu',
    MONGO_PASSWORD : process.env.MONGO_PASSWORD || 'ndungu11',
    MONGO_URI : `mongodb://ndungu:ndungu11@mongodb:${27017}/?authMechanism=DEFAULT`
    }