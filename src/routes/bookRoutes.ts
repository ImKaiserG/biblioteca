import { Router } from 'express';

const router = Router();

// Ruta básica para libros (de ejemplo)
router.get('/', (req, res) => {
  res.json({ message: 'Listado de libros (mock)' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Libro creado (mock)' });
});

export default router;
