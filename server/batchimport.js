const hikerTrails = require("./models/hikerTrails.json");
const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const batchImport = async () => {
    console.log(hikerTrails);

    const client = new MongoClient(MONGO_URI, options);

    try {
        await client.connect();
        const db = client.db("HikerSpecs");

        const result = await db.collection("hikertrails").insertMany(hikerTrails);
        console.log(result);

    } catch (err) {
        console.log(err.stack);
    }
        client.close();
};

batchImport();
