const { Schema, model } = require('mongoose');

const expenseSchema = new Schema({
  total: {
    type: Number,
    percision: 2,
    required: true,
  },
  duedate: {
    type: Date,
    require: true,
  }
},
{
    timestamps: true
});


module.exports = expenseSchema