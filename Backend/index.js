const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const UserModel = require('./models/User');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
const app = express();
let secret = "fjhgjdi83948479hkrshkshgh948y";

app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));

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

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        let user = await UserModel.findOne({ username });
        if (user === null) {
            res.status(404).json({ msg: "Username is not correct" });
        } else {
            let password_check = bcrypt.compareSync(password, user.password);
            if (!password_check) {
                res.status(404).json({ msg: "Username and password combination is not correct" });
            }
            let id = user._id;
            let token = await jwt.sign({ username, id }, secret);
            res.status(200).cookie("token", token).json('ok');
        }
    } catch (e) {
        console.log(e);
        res.status(404).json(e);
    }
});

app.listen(3000, () => { console.log('now listening on port 3000'); });