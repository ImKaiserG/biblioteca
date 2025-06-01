import { Request, Response } from 'express';
import Book from '../models/Book';

export const createBook = async (req: Request, res: Response) => {
  try {
    const { title, author, description } = req.body;
    const userId = req.user.id;

    const book = new Book({ title, author, description, user: userId });
    await book.save();

    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ message: 'Error al crear el libro', error: err });
  }
};

export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find({ user: req.user.id });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener libros' });
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const book = await Book.findOneAndUpdate(
      { _id: id, user: req.user.id },
      req.body,
      { new: true }
    );

    if (!book) return res.status(404).json({ message: 'Libro no encontrado' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: 'Error al actualizar el libro' });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await Book.findOneAndDelete({ _id: id, user: req.user.id });

    if (!deleted) return res.status(404).json({ message: 'Libro no encontrado' });
    res.json({ message: 'Libro eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ message: 'Error al eliminar el libro' });
  }
};

