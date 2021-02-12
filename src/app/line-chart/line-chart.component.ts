import { Component, OnInit,Input } from '@angular/core';
import * as chart from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @Input() public jsonData: any;
  @Input() public chartType: String;
  private label: any;
  private datas: any;
  constructor() { }

  ngOnInit(): void {
    this.createChart(this.chartType);

  }
  createChart(type) {
    this.label = Object.keys(this.jsonData.data)
    this.datas = Object.values(this.jsonData.data)
    console.log(...this.label)
    const myChart = new chart('mylineChart', {
      type: type,
      data: {
        labels: [...this.label],
        datasets: [
          {
            label: this.jsonData.description.title,
            data: [...this.datas],
            backgroundColor: "rgba(51,255,102,0.7)",
            borderColor: "rgba(51,51,51,0.7)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: this.jsonData.description.base_period

              },
            },
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: this.jsonData.description.units

              },
              ticks: {
                beginAtZero: false,
              },
            },
          ],
        },
      },
    });
  }

}
