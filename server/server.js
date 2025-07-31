import { getAllUsers, getUserById, getHintsByStudentId } from './controller.js';
import express from 'express';
import cors from 'cors';

const app = express();
const port = 8000;

app.use(cors());
// get all users
app.get('/api/users', getAllUsers);
// get user by ID
app.get('/api/users/:id', getUserById);
// get hints by student ID
app.get('/api/users/students/:studentID', getHintsByStudentId);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})