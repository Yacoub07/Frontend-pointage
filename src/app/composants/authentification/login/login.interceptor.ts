import { AutService } from '../aut.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor(private autService:AutService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const auth_token = localStorage.getItem('token');

    const accessToken = `Bearer ${auth_token?.substring(10, auth_token.length-2)}`

    if (accessToken) {
      // If we have a token, we set it to the header
      request = request.clone({
         setHeaders: {Authorization: `${accessToken}`}
      });
   }
   return next.handle(request).pipe(
  	catchError((err) => {
   	 if (err instanceof HttpErrorResponse) {
       	 if (err.status === 401) {

     	}
 	 }
  	return throwError(err.error);
	})

   )
  }
}

export const LoginInterceptorProvider=
{
  provide:HTTP_INTERCEPTORS,
  useClass: LoginInterceptor,
  multi:true,
}
