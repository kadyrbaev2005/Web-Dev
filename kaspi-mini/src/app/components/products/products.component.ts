import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3c/h70/63944536522782.jpg?format=gallery-medium',
      name: 'iPhone 11',
      description: 'Смартфон Apple iPhone 11 64Gb Slim Box черный',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-11-64gb-slim-box-chernyi-100692387/?c=471010000'
    },
    {
      image: 'https://kaspi.kz/image2.jpg',
      name: 'Product 2',
      description: 'Description for product 2',
      rating: 4.0,
      link: 'https://kaspi.kz/product2'
    },
    // Add more products...
  ];

  share(productLink: string, platform: string) {
    let shareUrl = '';
    if (platform === 'whatsapp') {
      shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(productLink)}`;
    } else if (platform === 'telegram') {
      shareUrl = `https://t.me/share/url?url=${encodeURIComponent(productLink)}`;
    }
    window.open(shareUrl, '_blank');
  }
}
