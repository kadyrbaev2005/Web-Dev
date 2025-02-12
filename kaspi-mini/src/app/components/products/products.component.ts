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
      image: 'https://kaspi.kz/image1.jpg',
      name: 'Product 1',
      description: 'Description for product 1',
      rating: 4.5,
      link: 'https://kaspi.kz/product1'
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
