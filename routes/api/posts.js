const router = require("express").Router();

// @route GET api/posts/test
// @desc Tests posts route
// @access Public
router.get("/test", (req, res) => res.json({msg: "Posts route works."}));

module.exports = router;