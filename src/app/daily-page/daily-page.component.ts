import { DailyModel } from './../shared/models/daily-model';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-daily-page',
  templateUrl: './daily-page.component.html',
  styleUrls: ['./daily-page.component.scss']
})
export class DailyPageComponent implements OnInit {

  daily: DailyModel;

  @ViewChild('dailySetup', { static: true})
  dailySetup: any;

  constructor() { }

  ngOnInit() {
    this.openSetupDialog();
  }

  openSetupDialog() {
    this.dailySetup.openDialog();
  }

}
