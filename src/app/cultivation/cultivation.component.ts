import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { HttpClient } from '@angular/common/http';
import { getLocaleFirstDayOfWeek } from '@angular/common';

@Component({
	selector: 'app-cultivation',
	templateUrl: './cultivation.component.html',
	styleUrls: ['./cultivation.component.css']
})
export class CultivationComponent implements OnInit {

	startdate;enddate;displayedColumns;dataSource;dataSourceCmp;showCompare;

	//dev purpose
	_startdate = '2020-07-01';
	_enddate = '2020-07-03';

	constructor(private http: HttpClient) {
	}

	ngOnInit() {
		this.startdate = new Date();
		this.enddate = new Date();
		this.startdate.setDate(this.startdate.getDate() - 1);
		this.showCompare = false;
		this.displayedColumns = ['Date', 'AreaCovered', 'Division', 'Job_Name', 'Mandays', 'Mnd/Area', 'Section_Name', 'Squad_Name'];

		//load data with start date and end date
		//const url = 'http://127.0.0.1:5000/cultdaily?start=' + this.convert(this.startdate)+ '&end=' + this.convert(this.enddate);
		const url = 'http://127.0.0.1:5000/cultdaily?start=' + this._startdate + '&end=' + this._enddate;
		this.http.get(url).subscribe((data: ICultivation) => {
			this.dataSource = data;
		});
	}

	clickedGo() {
		const url = 'http://127.0.0.1:5000/cultdaily?start=' + this.convert(this.startdate) + '&end=' + this.convert(this.enddate);
		this.http.get(url).subscribe((data: ICultivation) => {
			this.dataSource = data;
		});
	}

	clickedCompare() {
		const url = 'http://127.0.0.1:5000/cultdaily?start=' + this.convert(this.startdate) + '&end=' + this.convert(this.enddate);
		this.http.get(url).subscribe((data: ICultivation) => {
			this.dataSourceCmp = data;
			this.showCompare = true;
		});
	}

	totalAreaCovered() {
		if (this.dataSource) {
			return this.dataSource.map(t => t.AreaCovered).reduce((acc, value) => acc + value, 0);
		} else return null;
	}

	totalManDays(){
		if (this.dataSource) {
			return this.dataSource.map(t => t.Mandays).reduce((acc, value) => acc + value, 0);
		} else return null;
	}

	dateChange(type: string, event: MatDatepickerInputEvent<Date>) {
		switch (type) {
			case 'startdate': this.startdate = event.value;break;
			case 'enddate': this.enddate = event.value;break;
		}
	}

	convert(str) {
		var date = new Date(str),
			mnth = ("0" + (date.getMonth() + 1)).slice(-2),
			day = ("0" + date.getDate()).slice(-2);
		return [date.getFullYear(), mnth, day].join("-").toString();
	}

}

export interface ICultivation {
	Date: string;
	Job_Name: string;
	Section_Name: string;
	Squad_Name: string;
	Mandays: number;
	AreaCovered: number;
	Mnd_Area: number;
	Division: string;
}