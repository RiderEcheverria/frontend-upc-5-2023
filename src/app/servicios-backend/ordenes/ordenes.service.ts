import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class OrdenesService {

   // URL_BACKEND = "https://localhost";
   // PORT_BACKEND = "44301";

   // PATH_BACKEND = this.URL_BACKEND + this.PORT_BACKEND;
    PATH_BACKEND = environment.URL_BACKEND + environment.PORT_BACKEND;
    URL_GET_ORDENES = this.PATH_BACKEND + "/api/Ordenes"
    URL_GET_BY_ID_ORDENES = this.PATH_BACKEND + "/api/Ordenes/GetOrdenesById"
    URL_ADD_ORDENES = this.PATH_BACKEND + "/api/Ordenes/AddOrdenes"
    URL_UPDATE_ORDENES = this.PATH_BACKEND + "/api/Ordenes/UpdateOrdenes"
    URL_DELETE_ORDENES = this.PATH_BACKEND + "/api/Ordenes/DeleteOrdenes"

    constructor(private http: HttpClient) { }

    public GetOrdenes(): Observable<HttpResponse<any>> {

        return this.http
            .get<any>(this.URL_GET_ORDENES,
                { observe: 'response' })
            .pipe();
    }

    public AddOrdenes(entidad): Observable<HttpResponse<any>> {

        return this.http
            .post<any>(this.URL_ADD_ORDENES, entidad,
                { observe: 'response' })
            .pipe();
    }

    public UpdateOrdenes(entidad): Observable<HttpResponse<any>> {

        return this.http
            .post<any>(this.URL_UPDATE_ORDENES, entidad,
                { observe: 'response' })
            .pipe();
    }

    public DeleteOrdenes(item): Observable<HttpResponse<any>> {
    
        let params = new HttpParams();
        params = params.set('id', item.id);

        return this.http
            .post<any>(this.URL_DELETE_ORDENES,  "", {params: params, observe: 'response' })
            .pipe();
    }

}
