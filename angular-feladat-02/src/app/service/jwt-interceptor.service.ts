import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class JwtInterceptorService implements HttpInterceptor {

    constructor(private auth : AuthService,) {}

    intercept(request : HttpRequest < any >, next : HttpHandler): Observable < HttpEvent < any >> { // User data cannot be accessed without a token.
        const currentToken = this.auth.lastToken;

        if (currentToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentToken}`
                }
            });
        }

        return next.handle(request);
    }


    /*
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this.auth.currentUserValue;

    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      });
    }

    return next.handle(request);
  }
  */
}
