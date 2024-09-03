import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-tables',
  templateUrl: './products-tables.component.html',
  styleUrl: './products-tables.component.css',
})
export class ProductsTablesComponent implements OnInit {
  products: Product[] = [];

  constructor(private service: ProductService) {}
  ngOnInit() {
    this.loadProducts();
  }
  loadProducts() {
    this.service.getProducts().subscribe({
      next: (data) => (this.products = data),
    });
  }
}
