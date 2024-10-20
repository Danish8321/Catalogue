import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';
import { ProductService } from '../../services/product.service';
import { ProductFullDetailsComponent } from '../product-full-details/product-full-details.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [GalleryModule, ProductFullDetailsComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  private productService = inject(ProductService);
  private activatedRoute = inject(ActivatedRoute);
  images: GalleryItem[] = [];
  productId: string = '';

  async ngOnInit(): Promise<void> {
    this.activatedRoute.params.subscribe({
      next: async (params) => {
        console.log('productId - ' + JSON.stringify(params));
        if (params && 'id' in params) {
          this.productId = params['id'];
        }
        let allImages = await this.loadImages();
        this.images = allImages.map(
          (img: any) => new ImageItem({ src: img.Url, thumb: img.Url })
        );
      },
    });
  }

  async loadImages(): Promise<any> {
    return await this.productService.loadDummyImages();
  }
}
