import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../app-config.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  constructor(appConfig: AppConfigService) {
    console.log(appConfig.data.apiUrl);
  }

  ngOnInit(): void {
  }

}
