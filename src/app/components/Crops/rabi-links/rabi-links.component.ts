import { Component, OnInit } from '@angular/core';
import { CropsService } from 'src/app/services/crops-service.service';


@Component({
  selector: 'app-rabi-links',
  templateUrl: './rabi-links.component.html',
  styleUrls: ['./rabi-links.component.css']
})
export class RabiLinksComponent implements OnInit {
  Rabi_crops: any;
  demo_Rabi:string = ""; 
 constructor(private crop_details:CropsService) {}
 
  ngOnInit(): void {
    this.Rabi_crops = this.crop_details.getCropsRabi();
  }
}
