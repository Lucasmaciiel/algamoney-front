import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment'

export class LancamentoFiltro {
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentosUrl =  'http://localhost:8080/lancamentos';

  constructor(private http: HttpClient) { }


    pesquisar(filtro: LancamentoFiltro): Promise<any> {
      const headers = new HttpHeaders()
      // .append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCJdLCJub21lIjoiQWRtaW5pc3RyYWRvciIsImV4cCI6MTYxNDkwNDQzNywiYXV0aG9yaXRpZXMiOlsiUk9MRV9DQURBU1RSQVJfQ0FURUdPUklBIiwiUk9MRV9QRVNRVUlTQVJfUEVTU09BIiwiUk9MRV9SRU1PVkVSX1BFU1NPQSIsIlJPTEVfQ0FEQVNUUkFSX0xBTkNBTUVOVE8iLCJST0xFX1BFU1FVSVNBUl9MQU5DQU1FTlRPIiwiUk9MRV9SRU1PVkVSX0xBTkNBTUVOVE8iLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9DQVRFR09SSUEiXSwianRpIjoiY2NmNDk2NjgtNTdmMy00NjcxLWI3YTUtN2I4NDhmZWQ0NTBjIiwiY2xpZW50X2lkIjoibW9iaWxlIn0.5jxQm7DgGUfU9UxJIxrnEoNQ1DyC-m3rzcFp2l27Sis');
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
      
      let params = new HttpParams()
      .set('page', filtro.pagina.toString())
      .set('size', filtro.itensPorPagina.toString());


      if(filtro.descricao){
        params = params.set('descricao', filtro.descricao);
        }

        if (filtro.dataVencimentoInicio) {
          params = params.set('dataVencimentoDe', moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD'));
      }

      if (filtro.dataVencimentoFim) {
        params = params.set('dataVencimentoAte', moment(filtro.dataVencimentoFim).format('YYYY-MM-DD'));
    }

      return this.http.get(`${this.lancamentosUrl}?resumo`, { headers, params })
        .toPromise()
        .then(response => {
          const lancamentos = response['content'];

          const resultado = {
            lancamentos,
            total: response['totalElements']
          };
          return resultado;
        });
    }
}
