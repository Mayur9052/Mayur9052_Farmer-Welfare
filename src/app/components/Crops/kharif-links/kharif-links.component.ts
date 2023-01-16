import { Component, OnInit } from '@angular/core';
import { CropsService } from 'src/app/services/crops-service.service';


@Component({
  selector: 'app-kharif-links',
  templateUrl: './kharif-links.component.html',
  styleUrls: ['./kharif-links.component.css']
})
export class KharifLinksComponent implements OnInit {
  Kharif_crops: any = [];

  demo_demo1:string =""; 
  constructor(private crop_details: CropsService) { }

  ngOnInit(): void {
    this.Kharif_crops = this.crop_details.getCropsKharif();
  }
}