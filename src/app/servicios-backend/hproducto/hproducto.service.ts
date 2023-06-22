import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HproductoService {

  URL_BACKEND = "https://localhost";
    PORT_BACKEND = ":7127";

    PATH_BACKEND = this.URL_BACKEND + this.PORT_BACKEND;


    URL_GET_HPRODUCTO = this.PATH_BACKEND + "/api/HProducto"
    URL_GET_BY_ID = this.PATH_BACKEND + "/api/HProducto/GetHProductoById"
    URL_ADD_HPRODUCTO = this.PATH_BACKEND + "/api/HProducto/AddHProducto"
  
    
  
    constructor(private http: HttpClient) { }
  
    public GetHProducto(): Observable<HttpResponse<any>> 
    {
      return this.http
        .get<any>(this.URL_GET_HPRODUCTO,
          { observe: 'response' })
        .pipe();
    }
  
    public AddHProducto(entidad): Observable<HttpResponse<any>> 
    {
      return this.http
        .post<any>(this.URL_ADD_HPRODUCTO, entidad,
          { observe: 'response' })
        .pipe();
    }
  
  }