import express from "express";
import server from "./graphql/schema";
import cors from "cors";

const app = express();

server.applyMiddleware({ app });

// Express: Port
const PORT = process.env.PORT || 4000;

app.use(cors());
// Express: Listener

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'src/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'src /build', 'index.html'));
  });
}


app.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`);
});

// Exports
export default app;
