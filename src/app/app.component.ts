import {Component, OnInit} from '@angular/core';
import {Job} from '../models/Job';

declare function require(url: string);
const file = require('../assets/jobs.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  jobs = [];

  constructor() {
    for (const item of file.items) {
      this.jobs.push(new Job(item));
    }

    console.log(this.jobs);
  }

  ngOnInit() {

  }
}
