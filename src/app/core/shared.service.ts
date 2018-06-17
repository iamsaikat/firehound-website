import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SharedService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllDevices(): Observable<any> {
    return this.httpClient.get('devices');
  }

  downloadFile(url): Observable<any> {
    return this.httpClient.post('download', url);
  }
}
