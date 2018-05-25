import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SharedService } from '../core/shared.service';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
// import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DownloadComponent implements OnInit {
  devices;
  device;

  constructor(
    private sharedService: SharedService,
    public router: Router,
    private modalService: NgbModal,
    // private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    /** spinner starts on init */
    // this.spinner.show();
    this.getAllDevices();
  }

  getAllDevices () {
    this.sharedService.getAllDevices().subscribe(res => {
      console.log(res);
      this.devices = res;
    //   setTimeout(() => {
    //     /** spinner ends after 5 seconds */
    //     this.spinner.hide();
    // }, 1000);
    }, err => {
      console.log(err);
    });
  }

  gotoDownload (codename) {
    this.router.navigate(['download', codename]);
  }

  openVerticallyCentered(content, codename) {
    this.device = this.devices.find(v => v.codename === codename);
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }

  downloadFile(htmlContent) {
    this.sharedService.parseURL(htmlContent).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
    // const parser = new DOMParser();
    // const parsedHtml = parser.parseFromString(htmlContent, 'text/html');
    // console.log(parsedHtml);
  }

}
