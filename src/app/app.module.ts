import { LancamentoService } from './lancamentos/lancamento.service';
import { HttpClientModule } from '@angular/common/http';
import { PessoasModule } from './pessoas/pessoas.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    LancamentosModule,
    PessoasModule,
    CoreModule,
    HttpClientModule

  
  ],
  providers: [LancamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
