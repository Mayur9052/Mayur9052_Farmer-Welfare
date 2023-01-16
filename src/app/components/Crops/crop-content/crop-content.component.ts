import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Crops } from 'src/app/Crop_details/Crops_interface';
import { CropsService } from 'src/app/services/crops-service.service';

@Component({
  selector: 'app-crop-content',
  templateUrl: './crop-content.component.html',
  styleUrls: ['./crop-content.component.css']
})
export class CropContentComponent implements OnInit {
  // crops: any = [];
  cropsDetail!: Crops;
  // name: any;

  constructor(
    private crops_details: CropsService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    route.params.subscribe(params => {
      if (params['name'])
        this.cropsDetail = crops_details.getCropsByName(params['name']);
      // console.log(this.cropsDetail.Name);
    })
  }

  ngOnInit() {
    // this.name = this.route.snapshot.params['name'];
  }

}
