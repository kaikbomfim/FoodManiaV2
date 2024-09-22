import { Component } from '@angular/core';
import { IntroductionComponent } from "../../components/introduction/introduction.component";
import { FeedbacksComponent } from "../../components/feedbacks/feedbacks.component";
import { FoodsComponent } from "../../components/foods/foods.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IntroductionComponent, FeedbacksComponent, FoodsComponent],
  template: `
  <section class="content">
    <app-introduction></app-introduction>
    <app-foods></app-foods>
    <app-feedbacks></app-feedbacks>
  </section>`,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
