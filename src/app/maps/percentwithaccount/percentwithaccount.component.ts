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
    title: 'Company Performance',
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
