import { Injectable } from '@angular/core';
import { IFeedback } from '../../interfaces/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  url = 'http://localhost:3000/feedbacks';

  constructor() { }

  async getAllFeedbacks(): Promise<IFeedback[]> {
    const data = await fetch(this.url);
    return data.json() ?? [];
  }

  async getFeedbackById(id: Number): Promise<IFeedback | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return data.json() ?? {};
  }
}
