const mongoose = require("mongoose");

const vaultSchema = mongoose.Schema({
    productCode: String,
    productName: String,
    netWeight: String,
    unitsPerCase: Number,
    listPrice: String,
    unitBarcode: Number,
    caseBarcode: Number,
    activeProduct: Boolean,
});

module.exports = mongoose.model("VaultCollection", vaultSchema);