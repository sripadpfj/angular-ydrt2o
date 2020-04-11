import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  retailLoads: any[] = [];

  constructor(private httpClient: HttpClient){}

  ngOnInit() {
    this.httpClient.get("/assets/data.json").subscribe(data =>{
      console.log(data);
      this.retailLoads = data as any[];
    })
  }
}
