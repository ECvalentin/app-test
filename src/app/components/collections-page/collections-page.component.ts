import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-page',
  templateUrl: './collections-page.component.html',
  styleUrls: ['./collections-page.component.scss']
})
export class CollectionsPageComponent implements OnInit {

  constructor() { }
  
  
  data_list = [0,1,2,3,4,5,6,7,9,10,11, 12];
  

  ngOnInit(): void {
  }

}
