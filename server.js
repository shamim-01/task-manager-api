const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

connectDB();

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send('Task Manager API Running...');
});

app.use('/api/auth', authRoutes);

app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
app.use(notFound);

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
//XaUr9jO8XFwqMgoC
// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZmNjMDI4NzZhMWNjMjM5ODdiYTI0NyIsImlhdCI6MTc3ODE3MTk4NCwiZXhwIjoxNzgwNzYzOTg0fQ.0-UUZwKYbSKPMZkNp5CQO7Zermy9VZDZWFXZ9ovEa_g"
