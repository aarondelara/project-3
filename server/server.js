const express = require('express');
<<<<<<< HEAD
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
=======
const { ApolloServer } = require('apollo-server-express')
const path = require('path');
const { moneyMiddleware } = require('./utils/auth');

const { typeDefs, resolbers } = require('./schemas');
const db = require('./config/connections')
>>>>>>> 59094b52bb43368dc5261d68c1c192c17de4aa6b

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
<<<<<<< HEAD
  typeDefs,
  resolvers,
  context: authMiddleware,
});

=======
    typeDefs,
    resolbers,
    context: moneyMiddleware,
});
//Mern min project
>>>>>>> 59094b52bb43368dc5261d68c1c192c17de4aa6b
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
<<<<<<< HEAD
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer();
=======
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
>>>>>>> 59094b52bb43368dc5261d68c1c192c17de4aa6b
