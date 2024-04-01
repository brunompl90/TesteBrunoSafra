import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class CadastroClienteComponent implements OnInit {
  cadastroForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario(): void {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      cpf: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/),
        ],
      ],
      dataNascimento: ['', Validators.required],
      rendaMensal: ['', [Validators.required, Validators.min(0)]],
      email: ['', [Validators.required, Validators.email]],
      dataCadastro: ['', Validators.required],
    });
  }

  adicionarCliente(): void {
    if (this.cadastroForm.valid) {
      this.clienteService
        .adicionarCliente(this.cadastroForm.value)
        .subscribe(() => {
          console.log('Cliente adicionado com sucesso!');
          this.cadastroForm.reset();
        });
    } else {
      console.log('Dados inválidos. Verifique o formulário.');
    }
  }
}
