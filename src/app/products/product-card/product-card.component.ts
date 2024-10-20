import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IProduct } from '../../models/products';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  product = input.required<IProduct>();
}
