
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { DateFormatPipe } from './date-format.pipe'
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	constructor(private dataService: DataService, private dateFormat: DateFormatPipe) { }
	valueMonth:string = "";
	valueYear:string = "";
	selectedDataheader: any;
	datasInApp: any;
	dataFinal: any;
	dataAfterchooseMonth: any
	dataAfterchooseYear: any;
	ngOnInit(): void {
		this.dataService.getData()
			.subscribe((res) => {
				this.datasInApp = res;
				this.dataAfterchooseMonth = res;
				this.dataFinal = res[0]
			})

	}
	selectOption() {
		if (this.valueMonth !== '' && this.valueYear !== '') {
			if (this.valueMonth !== "none") {
				this.selectedDataheader = this.dataAfterchooseYear.find((data: any) =>
					data.date.toString().slice(6, 8) === "30" ||
					data.date.toString().slice(6, 8) === "28"
				)
			} else {
				this.selectedDataheader = this.dataAfterchooseYear.find((data: any) =>
					data.date.toString().slice(4, 6) === "12")
			}
		}
	}
	selectMonth() {
		// this.dataService.valueMonth = this.valueMonth;
		if(this.valueMonth !== "none"){
			this.dataAfterchooseMonth = this.datasInApp.filter((data: any) => {
				const dateStr = data.date.toString();
				const month = dateStr.slice(4, 6);
				return month === this.valueMonth;
			});
			this.selectYear();
		}else{
			this.dataAfterchooseMonth = this.datasInApp;
			this.selectYear();
		}
	}
	selectYear() {
		// this.dataService.valueYear = this.valueYear;
		if (this.valueYear && this.valueYear !== "none") {
			this.dataAfterchooseYear = this.dataAfterchooseMonth.filter((data: any) => {
				const dateStr = data.date.toString();
				const year = dateStr.slice(0, 4);
				return year === this.valueYear;
			});
			this.selectOption();
		}
	}
}
