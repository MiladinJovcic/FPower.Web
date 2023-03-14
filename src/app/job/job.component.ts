import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../app-config.service';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  title = 'app';
  constructor(appConfig: AppConfigService) {
    console.log(appConfig.data.apiUrl);
  }

  ngOnInit(): void {
  }

}
