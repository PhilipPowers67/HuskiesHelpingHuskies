const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
const profileRoutes = require('./profile-routes')
const apiRoutes = require('../controllers/api');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/profile', profileRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;