const router = require("express").Router();

// @route GET api/users/test
// @desc Tests users route
// @access Public
router.get("/test", (req, res) => res.json({msg: "Users route works."}));

module.exports = router;