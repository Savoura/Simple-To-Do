const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function register(req, res) {
    const { email, name, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const existingUser = await prisma.user.findFirst({
            where: {
                email,
            },
        });

        if (existingUser) {
            return res.status(409).json({ error: 'User already exists' });
        }

        await prisma.user.create({
            data: {
              email,
              name,
              password: hashedPassword,
            },
          });

        res.json({ success: "User created successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to register user' });
    }
}

async function login(req, res) {
    const { email, password } = req.body;
    try {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            res.status(401).json({ error: 'Invalid credentials' });
            return;
        }
        res.json({ message: 'Logged in successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to login' });
    }
}

module.exports = { register, login };
