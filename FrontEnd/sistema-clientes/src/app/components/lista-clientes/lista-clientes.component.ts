import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente/cliente.model';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css'],
})
export class ListaClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  clientesFiltrados: Cliente[] = [];
  filtroNome: string = '';
  filtroCPF: string = '';
  filtroDataNascimento: string = '';
  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.obterClientes();
  }

  obterClientes(): void {
    this.clienteService.obterClientes().subscribe((clientes) => {
      this.clientes = clientes;
      this.aplicarFiltros();
    });
  }

  aplicarFiltros(): void {
    this.clientesFiltrados = this.clientes.filter(
      (cliente) =>
        cliente.nome.toLowerCase().includes(this.filtroNome.toLowerCase()) &&
        cliente.cpf.includes(this.filtroCPF) &&
        (this.filtroDataNascimento
          ? cliente.dataNascimento === this.filtroDataNascimento
          : true)
    );
  }
}
