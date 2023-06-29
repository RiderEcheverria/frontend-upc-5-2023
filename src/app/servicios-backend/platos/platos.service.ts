import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PlatosService {

   // URL_BACKEND = "https://localhost";
   // PORT_BACKEND = "44301";

   // PATH_BACKEND = this.URL_BACKEND + this.PORT_BACKEND;
    PATH_BACKEND = environment.URL_BACKEND + environment.PORT_BACKEND;
    URL_GET_PLATOS = this.PATH_BACKEND + "/api/Platos"
    URL_GET_BY_ID_PLATOS = this.PATH_BACKEND + "/api/Platos/GetPlatosById"
    URL_ADD_PLATOS = this.PATH_BACKEND + "/api/Platos/AddPlatos"
    URL_UPDATE_PLATOS = this.PATH_BACKEND + "/api/Platos/UpdatePlatos"
    URL_DELETE_PLATOS = this.PATH_BACKEND + "/api/Platos/DeletePlatos"

    constructor(private http: HttpClient) { }

    public GetPlatos(): Observable<HttpResponse<any>> {

        return this.http
            .get<any>(this.URL_GET_PLATOS,
                { observe: 'response' })
            .pipe();
    }

    public AddPlatos(entidad): Observable<HttpResponse<any>> {

        return this.http
            .post<any>(this.URL_ADD_PLATOS, entidad,
                { observe: 'response' })
            .pipe();
    }

    public UpdatePlatos(entidad): Observable<HttpResponse<any>> {

        return this.http
            .post<any>(this.URL_UPDATE_PLATOS, entidad,
                { observe: 'response' })
            .pipe();
    }

    public DeletePlatos(item): Observable<HttpResponse<any>> {
    
        let params = new HttpParams();
        params = params.set('id', item.id);

        return this.http
            .post<any>(this.URL_DELETE_PLATOS,  "", {params: params, observe: 'response' })
            .pipe();
    }

}
