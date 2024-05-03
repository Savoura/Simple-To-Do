const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createTodo(req, res) {
    const { email, title, description } = req.body;
  
    try {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
  
        const todo = await prisma.todo.create({
            data: {
                title,
                description,
                createdAt: new Date(),
                user: {
                    connect: { id: user.id },
                },
            },
        });
  
        res.json(todo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to add todo item' });
    }
}

async function getTodos(req, res) {
    const { email } = req.params;
    try {
        const user = await prisma.user.findUnique({
            where: { email },
            include: { todoList: true }, // Include the associated todoList
        });
  
        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
  
        const todos = user.todoList;
        res.json(todos);
    } catch (error) {
        console.error('Failed to fetch todos:', error);
        res.status(500).json({ error: 'Failed to fetch todos' });
    }
}

module.exports = { createTodo, getTodos };
