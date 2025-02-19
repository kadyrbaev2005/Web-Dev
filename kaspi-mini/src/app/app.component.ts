import { Component } from '@angular/core';
import { PRODUCTS } from './data/products';
import { Product } from './models/product.model';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = ['Смартфоны', 'Ноутбуки', 'Аксессуары', 'Планшеты'];
  selectedCategory: string = 'Смартфоны';
  products: Product[] = [];

  constructor() {
    this.filterProducts();
  }

  filterProducts() {
    this.products = PRODUCTS.filter(p => p.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.filterProducts();
  }

  handleLike(productId: number) {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.likes++;
    }
  }

  handleRemove(productId: number) {
    this.products = this.products.filter(p => p.id !== productId);
  }
}
