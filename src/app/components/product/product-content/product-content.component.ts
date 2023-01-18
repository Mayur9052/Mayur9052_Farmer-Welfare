import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/Product_details/product_interface';
import { Product_details } from 'src/app/Product_details/product_details';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-content',
  templateUrl: './product-content.component.html',
  styleUrls: ['./product-content.component.css']
})
export class ProductContentComponent implements OnInit {
    
  constructor(private productService: ProductServiceService){}

  product_details_all: any = [];

  ngOnInit(): void {
      this.product_details_all = this.productService.getAllProduct();
  }
}
