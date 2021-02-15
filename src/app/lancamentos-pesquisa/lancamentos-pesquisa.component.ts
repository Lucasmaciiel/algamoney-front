import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {

  lancamentos = [
    { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/06/2017',
      dataPagamento: 'null', valor: 4.55, pessoa: 'Padaria do José' },
      { tipo: 'DESPESA', descricao: 'Compra de Refrigerante', dataVencimento: '30/06/2017',
      dataPagamento: '10/05/2020', valor: 4.55, pessoa: 'Mercado Jão' },
      { tipo: 'ENTRADA', descricao: 'Compra de pão', dataVencimento: '30/06/2017',
      dataPagamento: 'null', valor: 4.55, pessoa: 'Padaria Marcos' },
      { tipo: 'ENTRADA', descricao: 'Compra de pão', dataVencimento: '30/06/2017',
      dataPagamento: '10/06/2020', valor: 4.55, pessoa: 'Padaria do José' },
      { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/06/2017',
      dataPagamento: '14/02/2021', valor: 4.55, pessoa: 'Açougue Galdino' },
      { tipo: 'ENTRADA', descricao: 'Compra de pão', dataVencimento: '30/06/2017',
      dataPagamento: 'null', valor: 4.55, pessoa: 'Padaria do José' },
      { tipo: 'ENTRADA', descricao: 'Compra de pão', dataVencimento: '30/06/2017',
      dataPagamento: 'null', valor: 4.55, pessoa: 'Super mercado Avenida' }
  ];

}
