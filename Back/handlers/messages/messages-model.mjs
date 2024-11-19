import mongoose, { Schema } from 'mongoose';

const messageSchema = new Schema({
    sender: { type: String, required: true },
    email: { type: String, match: [/.+@.+\..+/, 'Please enter a valid email address'], required: true },   
    text: String,
    date: { type: Date, default: Date.now },
    closed: { type: Boolean, default: false }
});

export const Message = mongoose.model('Message', messageSchema);