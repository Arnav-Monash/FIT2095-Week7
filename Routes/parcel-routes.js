const express = require('express');
const parcelCont = require('./controllers/parcel-controller');
const router = express.Router();

router.get('/', parcelCont.getParcelsByAddress);
router.put('/', parcelCont.updateParcelAddressById);

module.exports = router;
