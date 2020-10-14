const router = require("express").Router();
const tw_wa = require("../controllers/tw-wa/tw-wa");
const auth_tw_wa = require("../controllers/tw-wa/auth");
router.get("/webhook", (req, res) => {
    res.status(200).json({ "status": "ok" });
});


router
    .route("/webhook")
    .post(auth_tw_wa, tw_wa);

module.exports = router;