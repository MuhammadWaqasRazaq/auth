import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import authRouter from './Routes/auth.routes.js';

const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

app.use('/auth', authRouter);

export default app;