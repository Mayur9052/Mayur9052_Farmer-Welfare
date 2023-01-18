import { Injectable, OnInit } from '@angular/core';
import { Products } from '../Product_details/product_interface';
import { Product_details } from '../Product_details/product_details';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService implements OnInit{

  constructor() { }

  getAllProduct(): Products[] {
    return Product_details;
  }

  getAllProductName(name:string ):Products {
    return this.getAllProduct().find(product => product.name == name) ?? new Products();
  }

  ngOnInit(): void {

  }
}
