import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products-tables',
  templateUrl: './products-tables.component.html',
  styleUrl: './products-tables.component.css'
})
export class ProductsTablesComponent {
  products : Product [] = [
    {"id": 1,
      "name": "SKin Valora",
      "price": 5000,
      "category": "Roubo"
    },

    {"id": 1,
      "name": "Vandal Skin",
      "price": 2000,
      "category": "Roubo"
    },

    {"id": 1,
      "name": "Matheus",
      "price": 1,
      "category": "Primata"
    },
  ];
}
