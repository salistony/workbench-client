import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard } from '../../_models/salisworkbench/dashboard';
import { Ticket } from '../../_models/salisworkbench/ticket';

@Injectable({
    providedIn: 'root'
})
export class SalisWorkbenchService {

    apiEndpoint = 'api/salisworkbench';

    constructor(private http: HttpClient) { }

    getTehnicieni(): Observable<Dashboard[]> {
        return this.http.get<Dashboard[]>(`${this.apiEndpoint}/tehnicieni`);
    }

    getTicketInfo(id: number): Observable<Ticket> {
      return this.http.get<Ticket>(`${this.apiEndpoint}/tickete?idAgent=${id}`)
    }
}
