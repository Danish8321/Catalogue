import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';
import { IProduct } from '../models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  baseUrl: string = environment.apiUrl;

  async loadProducts(): Promise<IProduct[]> {
    return await firstValueFrom(this.http.get<IProduct[]>('mockData.json'));
  }

  async loadDummyImages(): Promise<any> {
    return await firstValueFrom(this.http.get<any>('mockPics.json'));
  }
}
