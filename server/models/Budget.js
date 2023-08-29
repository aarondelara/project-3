const { Schema, model } = require('mongoose');
<<<<<<< HEAD
const dateFormat = require('../utils/dateFormat');

const budgetSchema = new Schema({
  thoughtText: {
    type: String,
    required: 'You need to make a budget!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  thoughtAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Budget = model('Budget', budgetSchema);

module.exports = Budget;
=======
const expenseSchema = require('./expenseSchema')

const budgetSchema = new Schema({
  income: {
    type: Number,
    percision: 2,
    required: true,
  },
  expenses: [expenseSchema], 

},
{
    timestamps: true
});

const Budget = model("Budget", budgetSchema)

module.exports = Budget
>>>>>>> 59094b52bb43368dc5261d68c1c192c17de4aa6b
