const express = require("express");
const router = express.Router();
const postsController = require("../controllers/comments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.post("/createComment/:postId", ensureAuth, postsController.createComment);

module.exports = router;
