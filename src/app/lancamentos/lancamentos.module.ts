import { SharedModule } from './../shared/shared.module';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { LancamentosGridComponent } from './lancamentos-grid/lancamentos-grid.component';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  declarations: [
    LancamentoCadastroComponent,
    LancamentosGridComponent,
    LancamentosPesquisaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,

    InputTextModule,
    InputMaskModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule
  ],
  exports: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent
  ]
})
export class LancamentosModule { }
