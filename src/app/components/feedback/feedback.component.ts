import { Component, Input } from '@angular/core';
import { IFeedback } from '../../interfaces/feedback';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  @Input() feedbackData!: IFeedback;
}
