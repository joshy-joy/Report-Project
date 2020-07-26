import { Component, OnInit, OnDestroy } from '@angular/core';
import { CultdailyService } from 'src/app/_services/cultdaily.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit, OnDestroy {

  table: any  = {table1: [], table2: []};
  searchSubscription: Subscription;
  compareSubscription: Subscription;

  constructor(private _cultdailyService: CultdailyService) { }

  ngOnInit(): void {
    this.searchSubscription = this._cultdailyService.searchListner.subscribe(
      (result) => {
      this.table.table1 = result;
      }
    );

    this.compareSubscription = this._cultdailyService.compareListner.subscribe(
      (result) => {
        this.table.table2 = result;
      }
    );
  }

  closeCompareTable() {
    console.log('table closed');
    this.table.table2 = [];
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
    this.compareSubscription.unsubscribe();
  }

}
