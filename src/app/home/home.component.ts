import { Component, inject, OnInit } from '@angular/core';
import { IProduct } from '../models/products';
import { ProductCardComponent } from '../products/product-card/product-card.component';
import { ProductService } from '../services/product.service';
import { ContactUsComponent } from "../contact-us/contact-us.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, ContactUsComponent],
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
