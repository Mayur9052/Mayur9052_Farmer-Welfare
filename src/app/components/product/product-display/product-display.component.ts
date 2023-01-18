import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Products } from 'src/app/Product_details/product_interface';
import { Product_details } from 'src/app/Product_details/product_details';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {
  product_details_all: any;
  
  constructor(private route : ActivatedRoute,
    private productService : ProductServiceService,
    private http : HttpClient
    ){
      route.params.subscribe(params => {
        if(params['name'])
          this.product_details_all = productService.getAllProductName(params['name']);
          console.log(this.product_details_all.name);          
        })
    }
  ngOnInit(): void {
    
  }
}
