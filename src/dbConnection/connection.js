const mongoose = require("mongoose");

const password = "PuixrXTnSZJAT1Pf";
const dbname = "pokedex";
const uri = `mongodb+srv://Obipolare:${password}@cluster0.betxn.mongodb.net/${dbname}?retryWrites=true&w=majority`;

const connection = () => {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connection;
