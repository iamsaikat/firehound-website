
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Router } from '@angular/router';




import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';



@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor (
    private router: Router
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    const authRequest = request.clone({
      // Disable Header(token) for now
      // setHeaders: {
      //   Authorization: `Bearer ${token}`
      // },
      url: `${environment.api.rooturl}/${request.url}`
    });

    return next.handle(authRequest)
      .catch(err => {
        if (err instanceof HttpErrorResponse && err.status === 0) {
          console.log('Check Your Internet Connection And Try again Later');
        } else if (err instanceof HttpErrorResponse && err.status === 401) {
          this.router.navigate(['/']);
        }
        return observableThrowError(err);
      });
  }
}
