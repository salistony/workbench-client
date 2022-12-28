import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../../_models/response/response'
import { Tehnicieni } from '../../_models/salisworkbench/tehnicieni';

@Injectable({
    providedIn: 'root'
})
export class TehnicieniService {

    apiEndpoint = 'api/tehnicieni';

    constructor(private http: HttpClient) { }

    getTehnicieni(): Observable<Tehnicieni[]>{
      return this.http.get<Tehnicieni[]>(`${this.apiEndpoint}`)
    }

    addTehnician(tehnician: Tehnicieni): Observable<Response<number>>{
      return this.http.post<Response<number>>(`${this.apiEndpoint}/add`, tehnician)
    }

    editTehnician(tehnician: Tehnicieni): Observable<Response<Tehnicieni>>{
      return this.http.patch<Response<Tehnicieni>>(`${this.apiEndpoint}/edit`, tehnician)
    }

    deleteTehnician(id: number): Observable<Response<boolean>>{
      return this.http.delete<Response<boolean>>(`${this.apiEndpoint}/delete?tehnicianId=${id}`)
    }
}
