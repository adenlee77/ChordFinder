const express = require("express");
const mongoose = require("mongoose")
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));


let Chord = null

app.get("/chords", async (req, res) => {
    const value = req.query.value

    try{
        if (value == "") {
            res.json(chords)
        } else {
            const chords = await Chord.find({ name: { $regex: value, $options: "i"} })
            res.json(chords)
        }
    } catch(err) {
        res.status(500).send(err.message)
    }
})

const uri = "mongodb+srv://adenlee:mh13e7713@chordfindercluster.douln.mongodb.net/chordTests?retryWrites=true&w=majority&appName=ChordFinderCluster"


async function connect () {
    try {
        await mongoose.connect(uri)
        console.log("Connected to MongoDB")
        const chordSchema = new  mongoose.Schema({
            name: String,
            link: String,
        })
        Chord = mongoose.model('Chord', chordSchema)
    } catch (error) {
        console.error(error);
    }
}

connect();

app.listen(8080, () => {
    console.log("Server started on port 8080");
});