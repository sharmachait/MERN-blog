const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const UserModel = require('./models/User');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://chait8126:29vansthaliA@cluster0.vsimsnr.mongodb.net/');

app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        let hash = bcrypt.hashSync(password, salt);
        console.log({ username, password: hash });
        const user = await UserModel.create({ username, password: hash });
        res.json(user);
    } catch (e) {
        res.status(400).json({ msg: "user already exists", excc: e });
    }
});

app.listen(3000, () => { console.log('now listening on port 3000'); });