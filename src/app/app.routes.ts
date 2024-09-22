import { Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'FoodMania' },
    { path: 'contact', component: ContactComponent, title: 'Contato' },
];
