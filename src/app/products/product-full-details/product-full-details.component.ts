import { Component, input } from '@angular/core';

@Component({
  selector: 'app-product-full-details',
  standalone: true,
  imports: [],
  templateUrl: './product-full-details.component.html',
  styleUrl: './product-full-details.component.scss',
})
export class ProductFullDetailsComponent {
  productId = input.required<string>();
}
