const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

// POST request - Add new data
exports.createData = functions.https.onRequest(async (req, res) => {
  try {
    const data = req.body;
    const docRef = await db.collection("items").add(data);
    res.status(201).send({id: docRef.id, message: "Document created"});
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// GET request - Retrieve all data
exports.getData = functions.https.onRequest(async (req, res) => {
  try {
    const snapshot = await db.collection("items").get();
    const items = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
    res.status(200).json(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// DELETE request - Delete a specific document
exports.deleteData = functions.https.onRequest(async (req, res) => {
  try {
    const {id} = req.query; // Document ID passed as a query param
    await db.collection("items").doc(id).delete();
    res.status(200).send({message: "Document deleted"});
  } catch (error) {
    res.status(500).send(error.message);
  }
});
