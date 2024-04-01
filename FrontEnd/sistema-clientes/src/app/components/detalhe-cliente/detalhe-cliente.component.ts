import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/cliente/cliente.model';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-detalhe-cliente',
  templateUrl: './detalhe-cliente.component.html',
  styleUrls: ['./detalhe-cliente.component.css'],
})
export class DetalheClienteComponent implements OnInit {
  cliente!: Cliente; // Remova a exclamação (!) para inicializar a variável
  detalheForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.obterDetalhesCliente();
  }

  obterDetalhesCliente(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.clienteService
      .obterClientePorId(Number.parseInt(id as string))
      .subscribe((cliente: Cliente) => {
        this.cliente = cliente;
        this.criarFormulario();
      });
  }

  criarFormulario(): void {
    this.detalheForm = this.fb.group({
      nome: [this.cliente.nome],
      cpf: [this.cliente.cpf],
      dataNascimento: [this.cliente.dataNascimento],
      rendaMensal: [this.cliente.rendaMensal],
      email: [this.cliente.email],
      dataCadastro: [this.cliente.dataCadastro],
    });
  }

  salvarAlteracoes(): void {
    if (this.detalheForm.valid) {
      console.log(this.detalheForm.value);
    } else {
      console.log('Formulário inválido. Verifique os campos.');
    }
  }
}
