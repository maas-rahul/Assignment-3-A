import { Component, OnInit } from '@angular/core';

import { ReportdataService } from '../shared/reportdata.service';
import { NgForm } from '../../../node_modules/@angular/forms';
import { Reportdata } from '../shared/reportdata.model';
import { KeyValuePipe, LowerCasePipe } from '../../../node_modules/@angular/common';
import { HttpClient } from '../../../node_modules/@angular/common/http';

declare var M: any;

@Component({
  selector: 'app-reportdata',
  templateUrl: './reportdata.component.html',
  styleUrls: ['./reportdata.component.css']
  //providers: [ReportdataService]
})
export class ReportdataComponent implements OnInit {

  search:string="";
  title:string="";
  description:string="";
  image:string="";
  title1:string="";
  description1:string="";
  image1:string="";
  found:boolean;
  found1:boolean;
  found2:boolean;
  found3:boolean;
  data1:any;
  remotedata:any;

  //constructor(private reportdataService: ReportdataService) { }

  constructor(private httpClient:HttpClient){}

  

  myfunction(event:any){
    console.log(event.target.value);
    this.search = (event.target.value).toLowerCase().match( /\bsales\b|\bmarketing\b|\binventory\b|\bfinance\b/ );
    this.found = false;
    this.found1 = false;
    if(!this.search){
      alert('you have entered an unknown word to me !!');
   //console.log('You have entered Unknown Keyword !! '+this.search);
    }
     this.httpClient.get('http://localhost:3000/reportdatas/'+this.search)
     .subscribe(
       (data:any[]) =>{
         console.log(data);
         if(data.length){
           this.description = data[0].description;
           this.title = data[0].title;
           this.image = data[0].image;
           this.found = true;
         }
       }
     )

     this.httpClient.get('http://localhost:3000/'+this.search)
     .subscribe(
      (data:any[]) =>{
        console.log(data);
        if(data.length){
           this.remotedata=data;
           this.found = true;
           if(this.search=='marketing'){
            this.found2 = true;
            this.found = false;
          }
        }
      }
    )
  }

  getmysqldata(){
     this.httpClient.get('http://localhost:3000/remote/'+this.search)
     .subscribe(
       (data:any[]) =>{
         console.log(data);
         if(data.length){
          this.data1=data;
          console.log(this.data1);

 
           this.description1 = data[0].description;
           this.title1 = data[0].title;
           this.image1 = data[0].image;
           this.found1 = true;

           if(this.search=='marketing'){
            this.found3 = true;
            this.found1 = false;
 
         }
       }
     )
  }

  model={
    search:''
  };

  ngOnInit() {
  }
}
