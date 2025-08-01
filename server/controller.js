import userData from '../userData.js';

export const getAllUsers = (req, res) => {
    res.json(userData);
}

export const getUserById = (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = userData.find(u => u.ID === userId);
    
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
}

export const getHintsByStudentId = (req, res) => {
    const studentId = parseInt(req.params.studentID, 10);
    const user = userData.find(u => u.studentID === studentId);
    
    if (user) {
        res.json({
            week1: user.week1,
            week2: user.week2,
            week3: user.week3
        });
    } else {
        res.status(404).send('Hints not found for this student ID');
    }

}