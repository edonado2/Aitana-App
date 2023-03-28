import express from 'express';

import { signup, login, isAuth, getDenuncias, logout, updatePassword, sendDenuncia } from '../controllers/auth.js';

const router = express.Router();

router.post('/login', login);

router.post('/signup', signup);

router.post('/logout', logout); //

router.get('/private', isAuth);

router.put('/update-password/:userId', updatePassword);

router.post('/denuncia/:userId', sendDenuncia);

router.get('/public', (req, res, next) => {
    res.status(200).json({ message: "here is your public resource" });

});

router.get('/users/:userId/denuncias', getDenuncias);

// will match any other path
router.use('/', (req, res, next) => {
    console.log(req.path)
    res.status(404).json({ error: "page not found" });
});

export default router;