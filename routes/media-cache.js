const router = require("express").Router();
const media_cache = require("../controllers/media-cache");
router.get("/", (req, res) => {
    res.status(200).json({ "status": "ok" });
});

router
    .route("/images/:sid")
    .post(media_cache.cacheImage)

router
    .route("/images/:sid")
    .get(media_cache.getImage);

module.exports = router;