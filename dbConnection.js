const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://wangyuheng086:admin@cluster0.6qq3o2w.mongodb.net/?retryWrites=true&w=majority";



const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

module.exports= client;