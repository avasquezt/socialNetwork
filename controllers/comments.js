const Comment = require("../models/Comment");

module.exports = {
    createComment: async (req, res) => {
        try {
          await Comment.create({
            comment: req.body.comment,
            post: req.params.postId,
            user: req.user.id,
          });
          console.log("Comment has been added!");
          res.redirect("/post/" + req.params.postId);
        } catch (err) {
          console.log(err);
        }
      }
}