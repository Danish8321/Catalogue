import { Component, inject, OnInit } from '@angular/core';
import { IProduct } from '../models/products';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  productService = inject(ProductService);
  products: IProduct[] = [];

  async ngOnInit(): Promise<void> {
    this.products = await this.loadProducts();
  }

  async loadProducts(): Promise<IProduct[]> {
    return await this.productService.loadProducts();
  }
}
