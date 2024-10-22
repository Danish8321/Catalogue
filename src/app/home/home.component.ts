import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { ProductCardComponent } from '../products/product-card/product-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, ContactUsComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private route = inject(Router);

  setCategory(category: string) {
    localStorage.setItem('category', category);
    this.route.navigate(['/products']);
  }
}
