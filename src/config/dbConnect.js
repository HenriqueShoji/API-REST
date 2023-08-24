import mongoose from "mongoose";

mongoose.connect("mongodb+srv://henriqueshoji:123@alura.gqauoug.mongodb.net/alura-node?");

let db = mongoose.connection;

export default db;