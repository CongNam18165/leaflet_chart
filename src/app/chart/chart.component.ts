import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { DateFormatPipe } from '../date-format.pipe';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  constructor(private dataService: DataService, private dateFormat: DateFormatPipe) { }
  lineChartData: any[] = []
  datas: any
  ngOnInit(): void {
    this.dataService.getData()
      .subscribe((res) => {
        this.datas = res;
        if (this.datas) {
          this.lineChartData = [
            {
              name: 'Số người chết',
              series: this.datas.map((data: any) => ({
                name: this.dateFormat.transform(data.date.toString()),
                value: data.death/10000
              }))
            },
            {
              name: 'Tỉ lệ tử vong',
              series: this.datas.map((data: any) => ({
                name: this.dateFormat.transform(data.date.toString()),
                value:(data.positive !== 0 && data.positive !== null) ? (data.death / data.positive) * 100 : 0
              }))
            },
            {
              name: 'Số người mắc Covid',
              series: this.datas.map((data: any) => ({
                name: this.dateFormat.transform(data.date.toString()),
                value: data.positive/1000000
              }))
            },
          ];
        }
      })
  }
}
