import { Component, OnInit } from '@angular/core';

declare function change():any;
@Component({
  selector: 'app-background-image',
  templateUrl: './background-image.component.html',
  styleUrls: ['./background-image.component.css']
})
export class BackgroundImageComponent implements OnInit {
  ngOnInit():void{
    change();
  }
}
