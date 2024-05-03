const express = require('express');
const corsMiddleware = require('./middleware/cors');
const { register, login } = require('./controllers/authController');
const { createTodo, getTodos } = require('./controllers/todoController');

const app = express();

app.use(express.json());
app.use(corsMiddleware);

app.post('/register', register);
app.post('/login', login);
app.post('/todos', createTodo);
app.get('/todos/:email', getTodos);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
