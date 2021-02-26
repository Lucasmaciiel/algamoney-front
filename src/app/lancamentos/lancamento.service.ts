import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentosUrl =  'http://localhost:8080/lancamentos';

  constructor(private http: HttpClient) { }


    pesquisar(): Promise<any> {
      const headers = new HttpHeaders()
        .append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCJdLCJub21lIjoiQWRtaW5pc3RyYWRvciIsImV4cCI6MTYxNDM2NDQ2NSwiYXV0aG9yaXRpZXMiOlsiUk9MRV9DQURBU1RSQVJfQ0FURUdPUklBIiwiUk9MRV9QRVNRVUlTQVJfUEVTU09BIiwiUk9MRV9SRU1PVkVSX1BFU1NPQSIsIlJPTEVfQ0FEQVNUUkFSX0xBTkNBTUVOVE8iLCJST0xFX1BFU1FVSVNBUl9MQU5DQU1FTlRPIiwiUk9MRV9SRU1PVkVSX0xBTkNBTUVOVE8iLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9DQVRFR09SSUEiXSwianRpIjoiNGU4MWFkODktNjhmMi00YmNjLTkxMDItZTNjNTVmY2IzMDk2IiwiY2xpZW50X2lkIjoibW9iaWxlIn0.2JQLPZuVZ6XT7l8-AMPC25NKUKGJgrUTU_tP5h7YBEs');
  
      return this.http.get(`${this.lancamentosUrl}?resumo`, { headers })
        .toPromise()
        .then(response => response['content']);
    }
}
