import { model } from 'mongoose';
import { Service } from '../interfaces/serviceInterface';
import { ServiceSchema } from '../schemas/serviceSchema';

export default model<Service>('Service', ServiceSchema);
