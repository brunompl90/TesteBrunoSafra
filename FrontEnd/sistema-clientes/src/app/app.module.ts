import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroClienteComponent } from './components/cliente/cliente.component';
import { DetalheClienteComponent } from './components/detalhe-cliente/detalhe-cliente.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroClienteComponent,
    ListaClientesComponent,
    DetalheClienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    CadastroClienteComponent,
    ListaClientesComponent,
    DetalheClienteComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
