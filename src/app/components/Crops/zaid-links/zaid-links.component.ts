import { Component, OnInit } from '@angular/core';
import { CropsService } from 'src/app/services/crops-service.service';


@Component({
  selector: 'app-zaid-links',
  templateUrl: './zaid-links.component.html',
  styleUrls: ['./zaid-links.component.css']
})
export class ZaidLinksComponent implements OnInit{
  
  constructor(private crop_details:CropsService){}
  
  Zaid_crops:any = [];
  demo_Zaid:string = "";

  ngOnInit(): void {
    this.Zaid_crops = this.crop_details.getCropsZaid();
  }
}
