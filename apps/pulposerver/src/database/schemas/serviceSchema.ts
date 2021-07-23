import { Schema } from 'mongoose';
import { Service } from '../interfaces/serviceInterface';

export const ServiceSchema = new Schema<Service>({
  title: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
  units: String,
});
