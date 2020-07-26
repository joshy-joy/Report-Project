import { Injectable } from '@angular/core';
import { TableData } from '../models/table.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CultdailyService {

  dataSample: TableData[] = [
    {"date": "2020/7/1", "jobName": "Spray Foliar", "sectionName": "1d", "squadName": "Squad4", "mandays": 30.0, "areaCovered": 1.6, "mndArea": 18.74999972060323, "division": "Glenburn"}, 
    {"date": "2020/7/1", "jobName": "Spray Foliar", "sectionName": "2", "squadName": "Squad3", "mandays": 40.0, "areaCovered": 3.2, "mndArea": 12.499999813735489, "division": "Glenburn"}, 
    {"date": "2020/7/1", "jobName": "Spray Pest", "sectionName": "3", "squadName": "Squad2", "mandays": 30.0, "areaCovered": 2.4, "mndArea": 12.499999503294646, "division": "Kimble"},
    {"date": "2020/7/1", "jobName": "Spray Foliar", "sectionName": "1d", "squadName": "Squad4", "mandays": 30.0, "areaCovered": 1.6, "mndArea": 18.74999972060323, "division": "Glenburn"}, 
    {"date": "2020/7/1", "jobName": "Spray Foliar", "sectionName": "2", "squadName": "Squad3", "mandays": 40.0, "areaCovered": 3.2, "mndArea": 12.499999813735489, "division": "Glenburn"}, 
    {"date": "2020/7/1", "jobName": "Spray Pest", "sectionName": "3", "squadName": "Squad2", "mandays": 30.0, "areaCovered": 2.4, "mndArea": 12.499999503294646, "division": "Kimble"}
  ];

  searchListner = new Subject<any>();
  compareListner = new Subject<any>();

  constructor(private _http: HttpClient) { }

  /*
  searchData(params) {
    return this._http.get('http://127.0.0.1:5000/cultdaily?' + 'start=' + params.start_date + '&end=' + params.end_date).map(
      (result) => {
        return result;
      }, (error: Response) => {
        return error;
      }
    );
  } */
}
