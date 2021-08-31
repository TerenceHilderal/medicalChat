const express = require('express');
const {
	ModelBuildInstance,
} = require('twilio/lib/rest/preview/understand/assistant/modelBuild');
const router = express.Router();
const { signup, login } = require('../controllers/auth');

router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
