
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import {DateFormatPipe} from './date-format.pipe'
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

constructor( private dataService:DataService,private dateFormat: DateFormatPipe ){}
chooseValue:string ='';
selectedData: any;
datasInApp:any;
dataFinal:any;
ngOnInit(): void {
	this.dataService.getData()
	.subscribe((res)=>{this.datasInApp = res;this.dataFinal = res[0]})
}
selectOption(){
	this.selectedData = this.datasInApp.find((data: any) =>
    this.dateFormat.transform(data.date.toString()) === this.chooseValue)
}
}
