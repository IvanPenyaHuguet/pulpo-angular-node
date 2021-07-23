import * as express from 'express';
import startDB from './database/database';
import { serviceRoutes } from './routes/exportRoutes';
import * as cors from 'cors';

const options: cors.CorsOptions = {
  origin: 'http://localhost:4200',
};

const port = process.env.PORT || 3333;
const app = express();

startDB();

// Middleware
app.use(cors(options));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use('/api', serviceRoutes);

// Start
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
