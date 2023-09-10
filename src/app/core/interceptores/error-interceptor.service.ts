import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, timeout } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor( ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // se muestra el spinner
    return next.handle(req).pipe(timeout(5000000),  //TODO Verificar el tiempo de respuesta del servidor
      catchError(error => this.manejarError(error))
   );
  }
  manejarError(error: HttpErrorResponse) {

    if(error.status==406){
      Swal.fire({
        position: 'center',
        icon: 'warning',
        iconColor:'#ff8100',
        titleText:`${error.error.mensaje}`,
        showConfirmButton: true, //cambio meno, true
      });
    }else if(error.status==0){
      Swal.fire({
        position: 'center',
        icon: 'error',
        iconColor:'#aa1010',
        title: 'Servicio no disponible',
        text: `Intente más tarde`,
        showConfirmButton: true,
        
      });
      //this.route.navigate(['/'])
    }
    // if(error.status>300){
    //   this.spinner.show();
    //   setTimeout(()=>{
    //     this.route.navigate(['/Seguridad/security']);
    //   }, 1000);
    // }
    return throwError(error.error);
  }
}