import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from './data/products';
import { Product } from './models/product.model';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Product[] = PRODUCTS;
  filteredProducts: Product[] = [];
  selectedCategory: string = '';
  categories: string[] = ['Smartphones', 'Laptops', 'TV', 'Tablets'];

  constructor() {}

  ngOnInit() {
    this.filteredProducts = this.products;
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.filteredProducts = this.products.filter(p => p.category === category);
  }

  onLikeProduct(id: number) {
    this.filteredProducts = this.filteredProducts.map(product => product.id === id ? { ...product, likes: product.likes < 1 ? (product.likes || 0) + 1  : product.likes - 1} : product)
  }
  
  onRemoveProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id);
    this.filteredProducts = this.products.filter(product => product.category === this.selectedCategory);
  }
}
