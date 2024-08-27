import { Product } from './../product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
    products : Product [] = [
      {"id": 1,
        "name": "SKin Valora",
        "price": 5000.00,
        "category": "Roubo"
      },

      {"id": 1,
        "name": "Vandal Skin",
        "price": 2000.00,
        "category": "Roubo"
      },

      {"id": 1,
        "name": "Matheus",
        "price": 1.00,
        "category": "Primata"
      },
    ];


}
