import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-cultivation',
  templateUrl: './cultivation.component.html',
  styleUrls: ['./cultivation.component.css']
})
export class CultivationComponent implements OnInit {

  startdate = new Date();
  enddate = new Date();
  displayedColumns;dataSource;
  showCompare = false;

  constructor() {
    this.startdate.setDate(this.startdate.getDate() - 1);
  }

  ngOnInit() {
    //load data with start date and end date
    this.displayedColumns = ['Dt', 'Job_Name', 'Section_Name', 'Squad_Name'];
    this.dataSource = ELEMENT_DATA;
  }

  clickedGo() {
    console.log('Go Clicked ' + this.convert(this.startdate) + ' ' + this.convert(this.enddate));
    //;pad with endtered date
  }

  clickedCompare() {
	console.log('Go Clicked ' + this.convert(this.startdate) + ' ' + this.convert(this.enddate));
	this.showCompare = true;
    //;pad with endtered date
  }

  /** Gets the total cost of all transactions. */
  // getTotalCost() {
  //   return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  // }

  dateChange(type: string, event: MatDatepickerInputEvent<Date>) {
    switch (type) {
      case 'startdate': this.startdate = event.value;
      case 'enddate': this.enddate = event.value;
    }
  }

  convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-").toString();
  }

}

export interface CultivateData {
  Dt: string;
  Job_Name: string;
  Section_Name: string;
  Squad_Name: string;
  Mandays: number;
  AreaCovered: number;
  mnd_Area: number;
  Division: string;
}

const ELEMENT_DATA: CultivateData[] = [{
	"Dt": "2020/7/1",
	"Job_Name": "Spray Foliar",
	"Section_Name": "1d",
	"Squad_Name": "Squad4",
	"Mandays": 30.0,
	"AreaCovered": 1.6,
	"mnd_Area": 18.74999972060323,
	"Division": "Glenburn"
}, {
	"Dt": "2020/7/1",
	"Job_Name": "Spray Foliar",
	"Section_Name": "2",
	"Squad_Name": "Squad3",
	"Mandays": 40.0,
	"AreaCovered": 3.2,
	"mnd_Area": 12.499999813735489,
	"Division": "Glenburn"
}, {
	"Dt": "2020/7/1",
	"Job_Name": "Spray Pest",
	"Section_Name": "3",
	"Squad_Name": "Squad2",
	"Mandays": 30.0,
	"AreaCovered": 2.4,
	"mnd_Area": 12.499999503294646,
	"Division": "Kimble"
},
{
	"Dt": "2020/7/1",
	"Job_Name": "Spray Foliar",
	"Section_Name": "1d",
	"Squad_Name": "Squad4",
	"Mandays": 30.0,
	"AreaCovered": 1.6,
	"mnd_Area": 18.74999972060323,
	"Division": "Glenburn"
}, {
	"Dt": "2020/7/1",
	"Job_Name": "Spray Foliar",
	"Section_Name": "2",
	"Squad_Name": "Squad3",
	"Mandays": 40.0,
	"AreaCovered": 3.2,
	"mnd_Area": 12.499999813735489,
	"Division": "Glenburn"
}, {
	"Dt": "2020/7/1",
	"Job_Name": "Spray Pest",
	"Section_Name": "3",
	"Squad_Name": "Squad2",
	"Mandays": 30.0,
	"AreaCovered": 2.4,
	"mnd_Area": 12.499999503294646,
	"Division": "Kimble"
},
{
	"Dt": "2020/7/1",
	"Job_Name": "Spray Foliar",
	"Section_Name": "1d",
	"Squad_Name": "Squad4",
	"Mandays": 30.0,
	"AreaCovered": 1.6,
	"mnd_Area": 18.74999972060323,
	"Division": "Glenburn"
}, {
	"Dt": "2020/7/1",
	"Job_Name": "Spray Foliar",
	"Section_Name": "2",
	"Squad_Name": "Squad3",
	"Mandays": 40.0,
	"AreaCovered": 3.2,
	"mnd_Area": 12.499999813735489,
	"Division": "Glenburn"
}, {
	"Dt": "2020/7/1",
	"Job_Name": "Spray Pest",
	"Section_Name": "3",
	"Squad_Name": "Squad2",
	"Mandays": 30.0,
	"AreaCovered": 2.4,
	"mnd_Area": 12.499999503294646,
	"Division": "Kimble"
},
{
	"Dt": "2020/7/1",
	"Job_Name": "Spray Foliar",
	"Section_Name": "1d",
	"Squad_Name": "Squad4",
	"Mandays": 30.0,
	"AreaCovered": 1.6,
	"mnd_Area": 18.74999972060323,
	"Division": "Glenburn"
}, {
	"Dt": "2020/7/1",
	"Job_Name": "Spray Foliar",
	"Section_Name": "2",
	"Squad_Name": "Squad3",
	"Mandays": 40.0,
	"AreaCovered": 3.2,
	"mnd_Area": 12.499999813735489,
	"Division": "Glenburn"
}, {
	"Dt": "2020/7/1",
	"Job_Name": "Spray Pest",
	"Section_Name": "3",
	"Squad_Name": "Squad2",
	"Mandays": 30.0,
	"AreaCovered": 2.4,
	"mnd_Area": 12.499999503294646,
	"Division": "Kimble"
},
{
	"Dt": "2020/7/1",
	"Job_Name": "Spray Foliar",
	"Section_Name": "1d",
	"Squad_Name": "Squad4",
	"Mandays": 30.0,
	"AreaCovered": 1.6,
	"mnd_Area": 18.74999972060323,
	"Division": "Glenburn"
}, {
	"Dt": "2020/7/1",
	"Job_Name": "Spray Foliar",
	"Section_Name": "2",
	"Squad_Name": "Squad3",
	"Mandays": 40.0,
	"AreaCovered": 3.2,
	"mnd_Area": 12.499999813735489,
	"Division": "Glenburn"
}, {
	"Dt": "2020/7/1",
	"Job_Name": "Spray Pest",
	"Section_Name": "3",
	"Squad_Name": "Squad2",
	"Mandays": 30.0,
	"AreaCovered": 2.4,
	"mnd_Area": 12.499999503294646,
	"Division": "Kimble"
},
{
	"Dt": "2020/7/1",
	"Job_Name": "Spray Foliar",
	"Section_Name": "1d",
	"Squad_Name": "Squad4",
	"Mandays": 30.0,
	"AreaCovered": 1.6,
	"mnd_Area": 18.74999972060323,
	"Division": "Glenburn"
}, {
	"Dt": "2020/7/1",
	"Job_Name": "Spray Foliar",
	"Section_Name": "2",
	"Squad_Name": "Squad3",
	"Mandays": 40.0,
	"AreaCovered": 3.2,
	"mnd_Area": 12.499999813735489,
	"Division": "Glenburn"
}, {
	"Dt": "2020/7/1",
	"Job_Name": "Spray Pest",
	"Section_Name": "3",
	"Squad_Name": "Squad2",
	"Mandays": 30.0,
	"AreaCovered": 2.4,
	"mnd_Area": 12.499999503294646,
	"Division": "Kimble"
},
{
	"Dt": "2020/7/1",
	"Job_Name": "Spray Foliar",
	"Section_Name": "1d",
	"Squad_Name": "Squad4",
	"Mandays": 30.0,
	"AreaCovered": 1.6,
	"mnd_Area": 18.74999972060323,
	"Division": "Glenburn"
}, {
	"Dt": "2020/7/1",
	"Job_Name": "Spray Foliar",
	"Section_Name": "2",
	"Squad_Name": "Squad3",
	"Mandays": 40.0,
	"AreaCovered": 3.2,
	"mnd_Area": 12.499999813735489,
	"Division": "Glenburn"
}, {
	"Dt": "2020/7/1",
	"Job_Name": "Spray Pest",
	"Section_Name": "3",
	"Squad_Name": "Squad2",
	"Mandays": 30.0,
	"AreaCovered": 2.4,
	"mnd_Area": 12.499999503294646,
	"Division": "Kimble"
},
{
	"Dt": "2020/7/1",
	"Job_Name": "Spray Foliar",
	"Section_Name": "1d",
	"Squad_Name": "Squad4",
	"Mandays": 30.0,
	"AreaCovered": 1.6,
	"mnd_Area": 18.74999972060323,
	"Division": "Glenburn"
}, {
	"Dt": "2020/7/1",
	"Job_Name": "Spray Foliar",
	"Section_Name": "2",
	"Squad_Name": "Squad3",
	"Mandays": 40.0,
	"AreaCovered": 3.2,
	"mnd_Area": 12.499999813735489,
	"Division": "Glenburn"
}, {
	"Dt": "2020/7/1",
	"Job_Name": "Spray Pest",
	"Section_Name": "3",
	"Squad_Name": "Squad2",
	"Mandays": 30.0,
	"AreaCovered": 2.4,
	"mnd_Area": 12.499999503294646,
	"Division": "Kimble"
},
{
	"Dt": "2020/7/1",
	"Job_Name": "Spray Foliar",
	"Section_Name": "1d",
	"Squad_Name": "Squad4",
	"Mandays": 30.0,
	"AreaCovered": 1.6,
	"mnd_Area": 18.74999972060323,
	"Division": "Glenburn"
}, {
	"Dt": "2020/7/1",
	"Job_Name": "Spray Foliar",
	"Section_Name": "2",
	"Squad_Name": "Squad3",
	"Mandays": 40.0,
	"AreaCovered": 3.2,
	"mnd_Area": 12.499999813735489,
	"Division": "Glenburn"
}, {
	"Dt": "2020/7/1",
	"Job_Name": "Spray Pest",
	"Section_Name": "3",
	"Squad_Name": "Squad2",
	"Mandays": 30.0,
	"AreaCovered": 2.4,
	"mnd_Area": 12.499999503294646,
	"Division": "Kimble"
}]
