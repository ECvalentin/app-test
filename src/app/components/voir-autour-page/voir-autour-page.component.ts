import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import data from 'src/assets/sites-autour.json';



@Component({
  selector: 'app-voir-autour-page',
  templateUrl: './voir-autour-page.component.html',
  styleUrls: ['./voir-autour-page.component.scss']
})
export class VoirAutourPageComponent implements OnInit {
  data_list = [0,1,2,3,4,5,6,7];
  
  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.getConfig();
  }

  configUrl = 'assets/sites-autour.json';

  getConfig() {
    console.log(this.http.get(
      this.configUrl, { observe: 'response' }));
    return this.http.get(this.configUrl);
  }


  // my_data: any;
  // public getResponseData() : Promise<any> {
  //     if(typeof(this.my_data) === "undefined") {
  //           return this.http.get('assets/sites-autour.json')
  //           .toPromise().then(res => {
  //                 this.my_data = res.json().response;
  //                 return this.my_data;
  //               }).catch(this.handleError);
  //     } else {
  //         return Promise.resolve(this.my_data);
  //     }


  // }

}
