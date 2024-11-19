import mongoose, { Schema } from 'mongoose';

const Image = new Schema({
    url: [String],
    alt: String
});

const Address = new Schema({
    state: String,
    country: String,
    city: String,
    street: String,
    houseNumber: String,
    zip: String,
});

const productSchema = new Schema({
    name: String,
    price: String,
    description: String,
    phone: String,
    category: String,
    image: Image,
    date: { type: Date, default: Date.now },
    address: Address,
    seller: { type: Schema.Types.ObjectId, required: true},
    sold: { type: Boolean, default: false},
    buyer: { type: Schema.Types.ObjectId, default: null}
});

export const Product = mongoose.model('Product', productSchema);