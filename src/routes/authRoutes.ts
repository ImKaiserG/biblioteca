import { Router } from 'express';
import { register, login } from '../controllers/authController';
import { check } from 'express-validator';
import { validateFields } from '../middleware/validateFields';

const router = Router();

router.post('/register', [
  check('email', 'El email es obligatorio').isEmail(),
  check('password', 'La contraseña debe tener mínimo 6 caracteres').isLength({ min: 6 }),
  validateFields
], register);

router.post('/login', [
  check('email', 'El email es obligatorio').isEmail(),
  check('password', 'La contraseña es requerida').not().isEmpty(),
  validateFields
], login);

export default router;
