import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Echipament } from '../../_models/salisworkbench/echipament';
import { Response } from '../../_models/response/response'

@Injectable({
    providedIn: 'root'
})
export class EchipamenteService {

    apiEndpoint = 'api/echipament';

    constructor(private http: HttpClient) { }

    getEchipamente(): Observable<Echipament[]>{
      return this.http.get<Echipament[]>(`${this.apiEndpoint}`)
    }

    addEchipament(echipament: Echipament): Observable<Response<number>>{
      return this.http.post<Response<number>>(`${this.apiEndpoint}/add`, echipament)
    }

    editEchipament(echipament: Echipament): Observable<Response<Echipament>>{
      return this.http.patch<Response<Echipament>>(`${this.apiEndpoint}/edit`, echipament)
    }

    deleteEchipament(id: number): Observable<Response<boolean>>{
      return this.http.delete<Response<boolean>>(`${this.apiEndpoint}/delete?echipamentId=${id}`)
    }
}
