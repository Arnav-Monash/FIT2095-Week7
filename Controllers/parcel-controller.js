const Parcel = require('./models/parcel');

module.exports = {
    getParcelsByAddress: async (req, res) => {
        let parcels = await Parcel.find({ address: req.query.address });
        res.json(parcels);
    },
    updateParcelAddressById: async (req, res) => {
        let updatedParcel = await Parcel.findByIdAndUpdate(req.body.id, { address: req.body.address }, { new: true });
        res.json(updatedParcel);
    }
};
