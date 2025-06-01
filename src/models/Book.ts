import { Schema, model, Document } from 'mongoose';

interface Book extends Document {
  title: string;
  author: string;
  description?: string;
  user: Schema.Types.ObjectId;
}

const bookSchema = new Schema<Book>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
});

export default model<Book>('Book', bookSchema);

