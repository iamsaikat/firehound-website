import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SharedService {

constructor(
  private httpClient: HttpClient
) { }

getAllDevices () {
  return this.httpClient.get('').map((response: any) => response);
}

}
