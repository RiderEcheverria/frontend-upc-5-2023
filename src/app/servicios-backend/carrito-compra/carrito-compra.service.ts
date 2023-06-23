import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarritoCompraService {

 
  URL_BACKEND = "https://localhost";
  PORT_BACKEND = ":7127";

  PATH_BACKEND = this.URL_BACKEND + this.PORT_BACKEND;

  URL_GET_CARRITO_COMPRA = this.PATH_BACKEND + "/api/CarritoCompra"
  URL_GET_BY_ID = this.PATH_BACKEND + "/api/CarritoCompra/GetCarritoCompraById"
  URL_ADD_CARRITO_COMPRA = this.PATH_BACKEND + "/api/CarritoCompra/AddCarritoCompra"



  constructor(private http: HttpClient) { }

  public GetCarritoCompra(): Observable<HttpResponse<any>> 
  {
    return this.http
      .get<any>(this.URL_GET_CARRITO_COMPRA,
        { observe: 'response' })
      .pipe();
  }

  public AddCarritoCompra(entidad): Observable<HttpResponse<any>> 
  {
    return this.http
      .post<any>(this.URL_ADD_CARRITO_COMPRA, entidad,
        { observe: 'response' })
      .pipe();
  }
}