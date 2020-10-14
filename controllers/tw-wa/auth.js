const db = require("../../db/dbConfig");
module.exports = async (req, res, next) => {
    // number starts with + and country code
    const phno = "+" + (await req.body.From.split("+")[1]);
    const docRef = db.collection("bot-users/channels/whatsapp").doc(phno);
    const snapShot = await docRef.get();
    // Existing User
    if (snapShot.exists) {
        res.user = await snapShot.data();
        console.log(res.user);
        next();
        return;
    }
    // New user
    else {
        let user = {
            phno: phno,
            given_info: false,
            createdAt: Date(),
        };

        await docRef.set(user);

        res.user = user;
        next();
        return;
    }
};
