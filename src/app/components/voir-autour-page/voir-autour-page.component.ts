import { Component, OnInit } from '@angular/core';
import data from 'src/assets/sites-autour.json';



@Component({
  selector: 'app-voir-autour-page',
  templateUrl: './voir-autour-page.component.html',
  styleUrls: ['./voir-autour-page.component.scss']
})
export class VoirAutourPageComponent implements OnInit {
  data_list = [0,1,2,3,4,5,6,7];
  
  constructor() { }


  ngOnInit(): void {
  }

}
