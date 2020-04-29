const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/register', (req, res) => {
    const { email, password } = req.body;
    req.session.user_data = {email, password};
    req.flash('success', 'Registro exitoso')
    res.redirect('/profile');
});

//Para cambiar a products /products
router.get('/profile', (req, res) => {
    const user = req.session.user_data;
    delete req.session.user_data;
    res.render('profile', {
        user
    });
});

router.get('/products', (req, res) => {
    res.render('products')
});

module.exports = router;