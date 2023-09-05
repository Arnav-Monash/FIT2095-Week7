const Sender = require('./models/sender');
const Parcel = require('./models/parcel');

module.exports = {
    getAllParcelsFromSender: async (req, res) => {
        let senderName = req.params.name;
        let sender = await Sender.findOne({ name: senderName }).populate('parcels');
        res.json(sender.parcels);
    },
    createSender: async (req, res) => {
        let newSender = new Sender({ name: req.body.name });
        await newSender.save();
        res.json(newSender);
    },
    deleteSenderById: async (req, res) => {
        await Sender.findByIdAndDelete(req.body.id);
        res.json({ message: 'Sender deleted successfully' });
    },
    updateSenderById: async (req, res) => {
        let updatedSender = await Sender.findByIdAndUpdate(req.body.id, { name: req.body.name }, { new: true });
        res.json(updatedSender);
    },
    addParcelToSender: async (req, res) => {
        let newParcel = new Parcel(req.body.parcel);
        newParcel.sender = req.body.senderId;
        await newParcel.save();
    
        let sender = await Sender.findById(req.body.senderId);
        sender.parcels.push(newParcel);
        await sender.save();
    
        res.json(newParcel);
    }    
};
