const express = require('express');
const router = express.Router();

router.get('/sweetbaov2', (req, res) => {
    res.render('index');
});

router.get('/sweetbaov2/index', (req, res) => {
    res.render('index');
});

router.get('/sweetbaov2/register', (req, res) => {
    res.render('index');
});