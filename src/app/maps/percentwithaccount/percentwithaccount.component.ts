import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }
  public line_ChartData = [
    ['Year', 'Sales', 'Expenses'],
    ['2004', 1000, 400],
    ['2005', 1170, 460],
    ['2006', 660, 1120],
    ['2007', 1030, 540]];

}
