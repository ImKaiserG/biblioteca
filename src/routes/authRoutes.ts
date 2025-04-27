import { Router } from 'express';

const router = Router();

// Ruta básica de autenticación (de ejemplo)
router.post('/login', (req, res) => {
  res.json({ message: 'Login exitoso (mock)' });
});

router.post('/register', (req, res) => {
  res.json({ message: 'Registro exitoso (mock)' });
});

export default router;
