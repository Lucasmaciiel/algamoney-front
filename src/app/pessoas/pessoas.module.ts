import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoasGridComponent } from './pessoas-grid/pessoas-grid.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [
    PessoaCadastroComponent,
    PessoasPesquisaComponent,
    PessoasGridComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,

    InputTextModule,
    ButtonModule,
    TooltipModule,
    InputMaskModule,
    TableModule,


  ],
  exports: [
    PessoaCadastroComponent,
    PessoasPesquisaComponent,
    PessoasGridComponent
  ]
})
export class PessoasModule { }
