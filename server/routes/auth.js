const express = require('express');
const { check } = require('express-validator');
const { register, login, getMe } = require('../controllers/authController');
// const { protect } = require('../middleware/authMiddleware'); // We will build this next

const router = express.Router();

// Validation rules
const registerValidation = [
  check('username', 'Username is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password must be 6 or more characters').isLength({ min: 6 }),
];

const loginValidation = [
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists(),
];

router.post('/register', registerValidation, register);
router.post('/login', loginValidation, login);
// router.get('/me', protect, getMe); // Protect middleware coming soon

module.exports = router;