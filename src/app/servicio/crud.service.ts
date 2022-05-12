import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API:string='http://localhost/empleados/';

  constructor(private clientehttp:HttpClient) { }

  agregarempleado(datosenpleado:empleado):Observable<any>{

    return this.clientehttp.post(this.API+"?insertar=1",datosenpleado);
  }

}
