import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { DownloadComponent } from './download/download.component';
import { DeviceComponent } from './device/device.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'download', component: DownloadComponent },
    { path: 'download/:codename', component: DeviceComponent },
    { path: '', component: LandingComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
