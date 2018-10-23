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
    ['2004', 1000, 400],
    ['2005', 1170, 460],
    ['2006', 660, 1120],
    ['2007', 1030, 540]];

    loadMapData(){
      this.http.get(environment.api+'/template/getBenchData?userId='+localStorage.getItem('userID'))
      .subscribe((res)=>{
        console.log(res);
        
      });
    }

}
