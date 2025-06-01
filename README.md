# Biblioteca Personal
Este es un proyecto web backend desarrollado con **Node.js**, **Express**, **TypeScript** y **MongoDB**. Permite a los usuarios autenticarse y gestionar una biblioteca personal de libros, con funcionalidades de agregar, editar, eliminar y listar libros.

# Características

- Registro e inicio de sesión de usuarios (JWT)
- CRUD de libros (título, autor, descripción, año)
- Rutas protegidas
- Validaciones con `express-validator`
- Control de errores
- MongoDB como base de datos

# Tecnologías

- Node.js
- Express
- TypeScript
- MongoDB + Mongoose
- JWT (autenticación)
- dotenv
- express-validator
- cors
  
# Instalación

1. **Clona el repositorio**
git clone https://github.com/tu-usuario/biblioteca-personal.git
cd biblioteca-personal

2. **Instala dependencias**
npm install

3. **Configura las variables de entorno**

Crea un archivo `.env` en la raíz del proyecto y agrega:

PORT=5000
MONGO_URI=mongodb://localhost:27017/biblioteca
JWT_SECRET=mitokenultrasecreto

4. **Ejecuta el proyecto**

Para desarrollo con recarga automática:

npm run dev

Para compilar y ejecutar:

npm run build
npm start

# Rutas disponibles

# Autenticación
- `POST /api/auth/register`
- `POST /api/auth/login`

# Libros (requieren token JWT)
- `GET /api/books`
- `POST /api/books`
- `PUT /api/books/:id`
- `DELETE /api/books/:id`

---

# Notas
- Puedes importar la colección de libros desde un JSON o agregar manualmente.

## 🏁 Licencia

Este proyecto es de uso académico y libre de modificación.
