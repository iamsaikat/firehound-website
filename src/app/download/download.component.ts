import { Component, OnInit } from '@angular/core';
import { SharedService } from '../core/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {
  devices;

  constructor(
    private sharedService: SharedService,
    public router: Router
  ) { }

  ngOnInit() {
    this.sharedService.getAllDevices().subscribe(res => {
      console.log(res);
      this.devices = res;
    }, err => {
      console.log(err);
    });
  }

  gotoDownload (codename) {
    this.router.navigate(['download', codename]);
  }

}
