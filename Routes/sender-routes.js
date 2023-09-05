const express = require('express');
const senderCont = require('./controllers/sender-controller');
const router = express.Router();

router.get('/:name', senderCont.getAllParcelsFromSender);
router.post('/', senderCont.createSender);
router.delete('/', senderCont.deleteSenderById);
router.put('/', senderCont.updateSenderById);

module.exports = router;
