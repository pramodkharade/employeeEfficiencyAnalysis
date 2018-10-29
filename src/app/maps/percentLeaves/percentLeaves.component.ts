import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-percentLeaves',
  templateUrl: './percentLeaves.component.html',
  styleUrls: ['./percentLeaves.component.css']
})
export class PercentLeavesComponent implements OnInit {
  public line_ChartOptions = {
    title: 'Percentage of unplanned leaves [ Within Account ]',
    curveType: 'function',
    legend: {
        position: 'bottom'
    }
};

public line_ChartOptions1 = {
  title: 'Percentage of unplanned leaves [ Across Account ]',
  curveType: 'function',
  legend: {
      position: 'bottom'
  }
};

constructor(public http: HttpClient) { }

  ngOnInit() {
    this.loadMapData();
  }
  public line_ChartData = [
    ['Vertical', 'P66', 'P80'],
    ['1', 39.5, 42.5],
    ['2', 41.6, 50.5],
    ['3', 43.00, 60],
    ['4', 84, 51]];

    loadMapData(){
      this.http.get(environment.api+'/template/getBenchData?userId='+localStorage.getItem('userID'))
      .subscribe((res)=>{
        console.log(res);
        
      });
    }

}
