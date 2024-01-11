import { Component, inject } from '@angular/core';

import { NgIf, NgFor, NgClass, AsyncPipe } from '@angular/common';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  standalone: true,
  imports: [
    NgIf, 
    NgFor, 
    NgClass, 
    ProductDetailComponent,
    AsyncPipe,
  ],
})
export class ProductListComponent  {
  pageTitle = 'Products';
  private productService = inject(ProductService);
  products = this.productService.products;
  errorMessage = this.productService.productsError;

  // readonly selectedProductId$ = this.productService.productSelected$;
  selectedProductId = this.productService.selectedProductId;

  onSelected(productId: number): void {
    this.productService.productSelected(productId);
  }
}
