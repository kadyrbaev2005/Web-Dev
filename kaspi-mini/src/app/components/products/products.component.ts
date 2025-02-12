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
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h45/64083958562846.jpg?format=gallery-medium',
      name: 'iPhone 12',
      description: 'Смартфон Apple iPhone 12 128Gb черный',
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/apple-iphone-12-128gb-chernyi-100656960/?c=471010000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h2e/64206204993566.jpg?format=gallery-medium',
      name: 'iPhone 13',
      description: 'Смартфон Apple iPhone 13 128Gb синий',
      rating: 4.3,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=471010000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h70/h13/64434418745374.jpg?format=gallery-medium',
      name: 'iPhone 14 Pro',
      description: 'Смартфон Apple iPhone 14 Pro 128Gb фиолетовый',
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-128gb-fioletovyi-106363283/?c=471010000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h01/h5f/86303746293790.jpg?format=gallery-medium',
      name: 'iPhone 15',
      description: 'Смартфон Apple iPhone 15 128Gb голубой',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-goluboi-113137929/?c=471010000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8d/h20/86300836954142.jpg?format=gallery-medium',
      name: 'iPhone 15 Pro',
      description: 'Смартфон Apple iPhone 15 Pro 128Gb серый',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-seryi-113138184/?c=471010000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h47/87295471124510.png?format=gallery-medium',
      name: 'iPhone 16',
      description: 'Смартфон Apple iPhone 16 128Gb белый',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-belyi-123726722/?c=471010000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium',
      name: 'iPhone 16 Pro Max',
      description: 'Смартфон Apple iPhone 16 Pro Max 256Gb золотистый',
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=471010000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h2a/h81/86275308224542.jpg?format=gallery-medium',
      name: 'Fast charger',
      description: 'Зарядное устройство Fast charger A2347 белый',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/fast-charger-a2347-belyi-120386729/?c=471010000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
      name: 'MacBook Air 13',
      description: 'Ноутбук Apple MacBook Air 13 2022 13.6" / 8 Гб / SSD 256 Гб / macOS / MLXW3',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=471010000'
    },
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
