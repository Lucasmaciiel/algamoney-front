import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {

  lancamentos = [
    { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2017, 5, 30),
      dataPagamento: new Date(), valor: 4.55, pessoa: 'Padaria do José' },
      { tipo: 'DESPESA', descricao: 'Compra de Refrigerante', dataVencimento: new Date(2017, 6, 27),
      dataPagamento: '10/05/2020', valor: 800000, pessoa: 'Mercado Jão' },
      { tipo: 'ENTRADA', descricao: 'Compra de pão', dataVencimento: new Date(2018, 7, 13),
      dataPagamento: new Date(), valor: 14312, pessoa: 'Padaria Marcos' },
      { tipo: 'ENTRADA', descricao: 'Compra de pão', dataVencimento: new Date(2015, 4, 14),
      dataPagamento: new Date(2020, 6, 10), valor: 800, pessoa: 'Padaria do José' },
      { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2019, 7, 20),
      dataPagamento: new Date(2021, 2, 14), valor: 55000, pessoa: 'Açougue Galdino' },
      { tipo: 'ENTRADA', descricao: 'Compra de pão', dataVencimento: new Date(2019, 1, 1),
      dataPagamento: new Date(), valor: 3055, pessoa: 'Padaria do José' },
      { tipo: 'ENTRADA', descricao: 'Compra de pão', dataVencimento: new Date(2020, 2, 3),
      dataPagamento: new Date(), valor: 4555, pessoa: 'Super mercado Avenida' }
  ];

}
