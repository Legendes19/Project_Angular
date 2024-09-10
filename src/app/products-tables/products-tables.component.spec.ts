import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsTablesComponent } from './products-tables.component';

describe('ProductsTablesComponent', () => {
  let component: ProductsTablesComponent;
  let fixture: ComponentFixture<ProductsTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsTablesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
