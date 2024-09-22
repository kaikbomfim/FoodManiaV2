import { Component, inject } from '@angular/core';
import { FeedbackComponent } from "../feedback/feedback.component";
import { IFeedback } from '../../interfaces/feedback';
import { FeedbackService } from '../../services/feedback/feedback.service';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [FeedbackComponent, MatDividerModule, CommonModule],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.css'
})
export class FeedbacksComponent {
  feedbackList: IFeedback[] = [];
  feedbackService: FeedbackService = inject(FeedbackService);

  constructor() {
    this.feedbackService.getAllFeedbacks().then((feedbackList: IFeedback[]) => {
      this.feedbackList = feedbackList;
    })
  }
}
