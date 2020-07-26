import { Component, OnInit } from '@angular/core';
import { CultdailyService } from 'src/app/_services/cultdaily.service';
import { TableData } from 'src/app/models/table.model';

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.css']
})
export class DateFilterComponent implements OnInit {

  constructor(private _cultdailyService: CultdailyService) { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    console.log(form.value);
    this._cultdailyService.searchListner.next(this._cultdailyService.dataSample);

    /*
    this._cultdailyService.searchData(form.value).subscribe(
      (result: TableData[]) => {
        this._cultdailyService.searchListner.next(result);
      }, err => {
        console.log(err);
      }
    ); */
  }

  compareTables(form) {
    console.log(form.value);
    this._cultdailyService.compareListner.next(this._cultdailyService.dataSample);

      /*
      this._cultdailyService.searchData(form.value).subscribe(
        (result: TableData[]) => {
          this._cultdailyService.searchListner.next(result);
        }, err => {
          console.log(err);
        }
      ); */
  }

}
