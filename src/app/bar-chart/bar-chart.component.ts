import { Component, OnInit, Input } from '@angular/core';
import * as chart from 'chart.js';
@Component({
    selector: 'app-bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
    @Input() public jsonData:any;
    private label: any;
    private datas: any;
    constructor() { }
    ngOnInit(): void {
        this.createChart();
    }

    createChart() {
        this.label = Object.keys(this.jsonData.data)
        this.datas = Object.values(this.jsonData.data)
        console.log(...this.label)
        const myChart = new chart('myChart', {
            type: "bar",
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
