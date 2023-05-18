const router = require('express').Router();
const adoptionRoutes = require('./Adoption');
const dogRoutes = require('./Dogs');

router.use('/Adoption', adoptionRoutes);
router.use('/Dogs', dogRoutes);

module.exports = router;
