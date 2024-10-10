import { Component, OnInit } from '@angular/core';

interface MerchItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-merch',
  template: `
    <div class="container col-6">
      <div class="merch-grid">
        <div *ngFor="let item of merchItems" class="merch-card">
          <img [src]="item.imageUrl" [alt]="item.name" />
          <h3>{{ item.name }}</h3>
          <p>{{ item.price | currency }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .merch-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        padding: 20px;
      }
      .merch-card {
        background-color: #e9ae4e;
        border-radius: 8px;
        padding: 16px;
        text-align: center;
        box-shadow: 8px 8px 0px 0px rgba(0, 0, 0, 1);
        transition: transform 0.3s ease;
        cursor: pointer;
      }
      .merch-card:hover {
        transform: translateY(-5px);
      }
      .merch-card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 4px;
        margin-bottom: 12px;
      }
      .merch-card h3 {
        margin: 0 0 8px;
        font-size: 1.2em;
      }
      .merch-card p {
        margin: 0;
        font-weight: bold;
      }
    `,
  ],
})
export class MerchComponent implements OnInit {
  merchItems: MerchItem[] = [
    { id: 1, name: 'T-Shirt', price: 25, imageUrl: 'assets/tshirt.jpg' },
    { id: 2, name: 'Hoodie', price: 45, imageUrl: 'assets/hoodie.jpg' },
    { id: 3, name: 'Cap', price: 20, imageUrl: 'assets/cap.jpg' },
    { id: 4, name: 'Poster', price: 15, imageUrl: 'assets/poster.jpg' },
    { id: 5, name: 'Vinyl Record', price: 30, imageUrl: 'assets/vinyl.jpg' },
    { id: 6, name: 'Mug', price: 12, imageUrl: 'assets/mug.jpg' },
    { id: 7, name: 'Keychain', price: 8, imageUrl: 'assets/keychain.jpg' },
    { id: 8, name: 'Sticker Pack', price: 5, imageUrl: 'assets/stickers.jpg' },
    { id: 9, name: 'Tote Bag', price: 18, imageUrl: 'assets/totebag.jpg' },
    {
      id: 10,
      name: 'Guitar Pick Set',
      price: 10,
      imageUrl: 'assets/picks.jpg',
    },
    { id: 11, name: 'Bandana', price: 7, imageUrl: 'assets/bandana.jpg' },
    { id: 12, name: 'Phone Case', price: 22, imageUrl: 'assets/phonecase.jpg' },
    { id: 13, name: 'Wristband', price: 6, imageUrl: 'assets/wristband.jpg' },
    { id: 14, name: 'Beanie', price: 16, imageUrl: 'assets/beanie.jpg' },
    { id: 15, name: 'Signed Photo', price: 35, imageUrl: 'assets/photo.jpg' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
