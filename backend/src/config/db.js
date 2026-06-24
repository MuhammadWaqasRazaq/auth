import mongoose from 'mongoose';
import config from './config.js';
import dns from 'dns';

dns.setServers(['1.1.1.1','8.8.8.8']);

async function connectDB() {

        await mongoose.connect(config.MONGO_URI);
        console.log('Connected to MongoDB');
       
    }

export default connectDB;   

