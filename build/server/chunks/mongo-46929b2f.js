import { MongoClient } from 'mongodb';

let _mongoClient;
const getMongoClient = async () => {
  if (!_mongoClient) {
    _mongoClient = new MongoClient("mongodb://mithilesh:Mithi0971@localhost:27017", { useUnifiedTopology: true, useNewUrlParser: true, keepAlive: true });
    await _mongoClient.connect();
  }
  return _mongoClient;
};
const getDb = async () => (await getMongoClient()).db("satirigal");
const userDb = async () => (await getMongoClient()).db("user");
const getUsersCollection = async () => (await userDb()).collection("users");
const getPaymentsCollection = async () => (await getDb()).collection("payments");
const getDBCollection = async (collectionName) => {
  if (collectionName === "users")
    return getUsersCollection();
  else
    return (await getDb()).collection(collectionName);
};

export { getUsersCollection as a, getPaymentsCollection as b, getDBCollection as g };
//# sourceMappingURL=mongo-46929b2f.js.map
