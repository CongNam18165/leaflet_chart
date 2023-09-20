import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { DataService } from '../data.service';
import { DateFormatPipe } from '../date-format.pipe';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnChanges, OnInit {
  constructor(private dataService: DataService, private dateFormat: DateFormatPipe) { }
  @Input() valueMonth: any;
  @Input() valueYear: any;
  // lineChartData: any[] = []
  barChartData: any[] = []
  datas: any
  currentValue: any;
  yearArray: any[] = []
  monthArray: any[] = []
  ngOnInit(): void {
    this.dataService.getData()
      .subscribe((res) => {
        // this.datas = res.slice().reverse();
        this.datas = res;
      })
  }
 
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['valueMonth'] && changes['valueMonth'].currentValue !== 'none' && changes['valueMonth'].currentValue !== ''
    && this.valueYear === '' || this.valueYear === 'none') {
      //reset mảng yearArray sau đó lọc mảng dữ liệu thô lấy từ API để lấy các dữ liệu có tháng mà mình chọn
        this.yearArray = [];
        this.currentValue = this.datas.filter((data: any) => {
          const dateStr = data.date.toString();
          const month = dateStr.slice(4, 6);
          return month === this.valueMonth;
        })
        // thêm vào mảng yearArray các năm mà có trong data
        this.currentValue.forEach((data: any) => {
          const year = data.date.toString().slice(0, 4);
          if (!this.yearArray.includes(year)) {
            this.yearArray.push(year)
          }
        })
        //bar-chart
        //Gán dữ liệu biểu đồ
        this.barChartData = this.yearArray.map((currentData) => {
          return {
            name: `Số người dương tính với Covid tháng ${this.valueMonth} của năm ${currentData}`,
            value: this.currentValue
              .filter((data: any) => data.date.toString().slice(0, 4) === currentData)[0].positive
          }
        })
      // }
      // line-chart
      //   this.lineChartData = this.yearArray.map((currentData) => {
      //     return {
      //       name: `Số người dương tính với Covid tháng ${this.valueMonth} của năm ${currentData}`,
      //       series: this.currentValue
      //         .filter((data: any) => data.date.toString().slice(0, 4) === currentData)
      //         .map((data: any) => ({
      //           name: this.dateFormat.transform(data.date.toString()),
      //           value: (data.positive !== 0 && data.positive !== null) ? data.positive : 0
      //         }))
      //     }
      //   })
      // }
    }
    if (changes['valueYear'] && changes['valueYear'].currentValue !== 'none' && changes['valueYear'].currentValue !== ''
    && this.valueMonth === '' || this.valueMonth === 'none') {
        this.monthArray = []
        this.currentValue = this.datas.filter((data: any) => {
          const dateStr = data.date.toString();
          const year = dateStr.slice(0, 4);
          return year === this.valueYear;
        })

        this.currentValue.forEach((data: any) => {
          const month = data.date.toString().slice(4, 6);
          if (!this.monthArray.includes(month)) {
            this.monthArray.push(month)
          }
        })

        this.barChartData = this.monthArray.map((currentData) => {
          return {
            name: `Tháng ${currentData}`,
            value: this.currentValue
              .filter((data: any) => data.date.toString().slice(4, 6) === currentData)[0].positive
          }
        })
    }
    if (this.valueMonth !== '' && this.valueMonth !== 'none' && this.valueYear !== '' && this.valueYear !== 'none') {
      this.currentValue = this.datas.filter((data: any) => {
        const dateStr = data.date.toString();
        const year = dateStr.slice(0, 4);
        return year === this.valueYear;
      }).filter((data: any) => {
        const dateStr = data.date.toString();
        const month = dateStr.slice(4, 6);
        return month === this.valueMonth;
      })

      this.barChartData = [
        {
          name: `Tháng ${this.valueMonth} của năm ${this.valueYear}`,
          value: this.currentValue[0].positive
        }
      ]
    }

  }
}




