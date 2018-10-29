import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-percentwithaccount',
  templateUrl: './percentwithaccount.component.html',
  styleUrls: ['./percentwithaccount.component.css']
})
export class PercentwithaccountComponent implements OnInit {
  public line_ChartOptions = {
    title: 'Percent Bench [ Within Account ]',
    curveType: 'function',
    legend: {
      position: 'bottom'
    }
  };
  // tempgraphData: Array<any> = [];
  // public line_ChartOptions1 = {
  //   title: 'Percent Bench [ Across Account ]',
  //   curveType: 'function',
  //   legend: {
  //     position: 'bottom'
  //   }
  // };
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.loadMapData();
  }
  public line_ChartData = [
    ['Vertical', 'P66', 'P80']/*,
    ['1', 39.5, 42.5],
    ['2', 41.6, 50.5],
    ['3', 43.00, 60],
  ['4', 84, 51]*/ ];

  loadMapData() {
    this.http.get(environment.api + '/template/getBenchData?userId=' + localStorage.getItem('userID'))
      .subscribe((res) => {
        res['data'].forEach(e => {
          console.log(parseFloat(e.list.splice(0, 1)[0].p66));
          this.line_ChartData = [...this.line_ChartData,
          [
            e.vertical,
            parseFloat(e.list.splice(0, 1)[0].p66),
            parseFloat(e.list.splice(0, 1)[0].p80)
          ]
          ];
        });
       // console.log(res['data']);
      });
  }

}
