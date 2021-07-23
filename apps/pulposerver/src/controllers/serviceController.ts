import { Request, Response } from 'express';
import { db } from '../database/database';
import { ServiceModel } from '../database/models/exportModels';

export const add = async (req: Request, res: Response): Promise<Response> => {
  try {
    const service = req.body;
    await db.collection('services').insertMany(service);
    return res.status(200).json(service);
  } catch (err) {
    console.log(err);
    return res.status(400);
  }
};

export const del = async (req: Request, res: Response): Promise<Response> => {
  try {
    await ServiceModel.findOneAndRemove({ _id: req.body._id }).exec();
    return res.status(200);
  } catch (err) {
    console.log(err);
    return res.status(400);
  }
};

export const getAll = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = await ServiceModel.find()
    .exec()
    .catch((err) => {
      res.status(400).json({ msg: err.message });
    });

  return res.status(200).json(data);
};
