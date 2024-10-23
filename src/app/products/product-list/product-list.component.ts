import { Component, inject, OnInit } from '@angular/core';
import { IProduct } from '../../models/products';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  private productService = inject(ProductService);
  products: IProduct[] = [];
  category: string = '';

  async ngOnInit(): Promise<void> {
    this.category = localStorage.getItem('category') ?? 'infant';
    let results = await this.loadProducts();
    this.products = results.filter((prod) => prod.gender === 'M');
  }

  async loadProducts(): Promise<IProduct[]> {
    return await this.productService.loadProducts();
  }
}
