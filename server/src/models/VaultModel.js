const mongoose = require("mongoose");

const vaultSchema = mongoose.Schema({
    productCode: Number,
    productName: String,
    netWeight: Number,
    unitsPerShipper: Number,
    listPrice: String,
    unitBarcode: Number,
    shipperBarcode: Number,
    activeProduct: Boolean,
});

module.exports = mongoose.model("VaultCollection", vaultSchema);