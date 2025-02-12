import { Component } from '@angular/core';

interface Product {
  image: string;
  name: string;
  description: string;
  rating: number;
  link: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h70/84083566307358.jpg',
      name: 'iPhone 15 Pro',
      description: 'Apple iPhone 15 Pro with A17 chip and titanium body',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-116634471/'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1c/h25/64383981752350.jpg',
      name: 'Samsung Galaxy S23',
      description: 'Samsung Galaxy S23 with Snapdragon 8 Gen 2',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-256gb-116128509/'
    },
    // Add 8 more products...
  ];

  share(product: Product, platform: string) {
    let url = '';
    if (platform === 'whatsapp') {
      url = `https://wa.me/?text=${encodeURIComponent(product.link)}`;
    } else if (platform === 'telegram') {
      url = `https://t.me/share/url?url=${encodeURIComponent(product.link)}`;
    }
    window.open(url, '_blank');
  }
}