const express = require('express');
const router = express.Router();
const commentsController = require('../controller/commentsController');

router.post('/comments', commentsController.createComment);

router.get('/comments/:id', commentsController.getCommentById);

router.get('/posts/:postId/comments', commentsController.getCommentsByPostId);

router.put('/comments/:id', commentsController.updateCommentById);

router.delete('/comments/:id', commentsController.deleteCommentById);

module.exports = router;
