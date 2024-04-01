import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteComponent } from './components/cliente/cliente.component';
import { DetalheClienteComponent } from './components/detalhe-cliente/detalhe-cliente.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';

const routes: Routes = [
  { path: '', component: ListaClientesComponent },
  { path: 'cadastrar-cliente', component: CadastroClienteComponent },
  { path: 'detalhe-cliente/:id', component: DetalheClienteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
