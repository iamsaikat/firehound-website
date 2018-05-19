import { Component, OnInit } from '@angular/core';
import { SharedService } from '../core/shared.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  codename: string;
  device;
  sub: Subscription;


  constructor(
    private sharedService: SharedService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.codename = this.route.snapshot.params.codename;
    console.log(this.codename);
    this.sharedService.getAllDevices().subscribe((res: any) => {
      this.device = res.find(v => v.codename === this.codename).files;
      console.log(this.device);
    }, err => {
      console.log(err);
    });
  }

}
