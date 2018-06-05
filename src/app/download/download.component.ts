import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { SharedService } from '../core/shared.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';

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
    private spinner: NgxSpinnerService,
    @Inject(DOCUMENT) private document: any
  ) { }

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
    this.getAllDevices();
  }

  getAllDevices() {
    this.sharedService.getAllDevices().subscribe(res => {
      this.devices = res.devices;
      setTimeout(() => {
        /** spinner ends after 1 seconds */
        this.spinner.hide();
      }, 1000);
    }, err => {
      console.log(err);
    });
  }

  openVerticallyCentered(content, codename) {
    this.spinner.show();
    this.device = this.devices.find(v => v.codename === codename);
    setTimeout(() => {
      this.spinner.hide();
      this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
    }, 1000);
  }

  downloadFile(htmlContent): void {
    const reqData = {link: htmlContent};
    this.sharedService.downloadFile(reqData).subscribe(res => {
      // console.log(res);
      this.document.location.href = res.download_link;
    }, err => {
      console.log(err);
    });
  }
}