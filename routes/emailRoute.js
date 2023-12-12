const { Router } = require('express');
const { sendEmail } = require('../controllers/emailController');

const router = Router();

router.get('/', sendEmail );

module.exports = router;
// lleb jrwm xrmd yewv
