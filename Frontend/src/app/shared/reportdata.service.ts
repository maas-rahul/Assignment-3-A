import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';

//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { Reportdata } from './reportdata.model';

@Injectable({
  providedIn: 'root'
})
export class ReportdataService {
  selectedReportdata: Reportdata;
  reportdatas: Reportdata[];
  readonly baseURL = 'http://localhost:3000/reportdatas';

  constructor(private http : HttpClient) { }

  getReportlist(){
    return this.http.get(this.baseURL);
  }

  postReportdata(report : Reportdata){
    return this.http.post(this.baseURL, report);
  }
}
