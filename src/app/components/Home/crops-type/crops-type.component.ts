import { Component, OnInit } from '@angular/core';
import { CropsService } from '../../../services/crops-service.service';

@Component({
  selector: 'app-crops-type',
  templateUrl: './crops-type.component.html',
  styleUrls: ['./crops-type.component.css']
})
export class CropsTypeComponent implements OnInit {
  Crops_types_matter: any = "";
  constructor(private Crops_types: CropsService) { }
  demo_demo:boolean = false;
  Types: any = [];
  crops: any = [];
  matter: any = [];

  ngOnInit() {
    this.Types = this.Crops_types.Types();
    this.matter = this.Crops_types.Crops_matter();
    this.onSelect(this.Types);
  }

  onSelect(Types: any) {
    this.crops = this.Crops_types.Crops_index().filter(e => e.id == Types.target.value);
    this.Crops_types_matter = this.Crops_types.Crops_matter().filter(e => e.id == Types.target.value);
    this.demo_demo = !this.demo_demo;
  }
}
