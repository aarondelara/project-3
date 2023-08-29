const Budget = model('Budget', budgetSchema);

module.exports = Budget;
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
