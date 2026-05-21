import type { IOpinion } from "./opinion.interface";
import { OpinionModel } from "./opinion.model";

export class OpinionService {
  async createOpinion(data: Partial<IOpinion>): Promise<IOpinion> {
    const opinion = await OpinionModel.create(data);
    return opinion.toObject() as IOpinion;
  }

  async getMyOpinion(bpNumber: string): Promise<IOpinion | null> {
    const normalized = bpNumber.trim().toUpperCase();
    const doc = await OpinionModel.findOne({ bpNumber: normalized });
    return doc ? (doc.toObject() as IOpinion) : null;
  }

  async getAllOpinions(): Promise<IOpinion[]> {
    const docs = await OpinionModel.find().sort({ createdAt: -1 });
    return docs.map((d) => d.toObject() as IOpinion);
  }

  async updateMyOpinion(
    bpNumber: string,
    update: Partial<IOpinion>
  ): Promise<IOpinion | null> {
    // Don't allow changing bpNumber via this endpoint
    delete update.bpNumber;

    const normalized = bpNumber.trim().toUpperCase();
    const doc = await OpinionModel.findOneAndUpdate(
      { bpNumber: normalized },
      { $set: update },
      { new: true, runValidators: true }
    );

    return doc ? (doc.toObject() as IOpinion) : null;
  }
}