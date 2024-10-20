import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

export const routes: Routes = [
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: '', component: HomeComponent },
];
