const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomSchema = new Schema(
  {
    name: { type: String, required: true },
    creater: { type: String, required: true },
    // description: { type: String, required: true },
    // type: { type: String, required: true},
    product: [{type:Schema.Types.ObjectId, ref: 'Product'}]
  },
  {
    timestamps: true,
  }
);

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;