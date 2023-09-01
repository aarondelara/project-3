const express = require('express');
const { MoneymanServer } = require('apollo-server-express');
const path = require('path');
const { MoneyMiddleware } = require('./utils/auth');

const { typeDefs, resolbers } = require('./schemas');
const db = require('./config/connections')

const PORT = process.env.PORT || 3001;
const app = express();
const server = new MoneymanServer({
    typeDefs,
    resolbers,
    context: MoneyMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/public')))
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));

});



const startMoneyserver = async () => {
    await server.start();
    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`)
            console.log(`Use GRaphQL at http:localhost:${PORT}${server.graphqlPath}`);
        })
    })
};

startMoneyserver();