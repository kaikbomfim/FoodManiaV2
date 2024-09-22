import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, CommonModule, NgxMaskDirective],
  providers: [provideNgxMask()],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  formContact = new FormGroup({
    nome: new FormControl('', [
      Validators.minLength(4),
      Validators.required
    ]),
    assunto: new FormControl('', [
      Validators.minLength(10),
      Validators.required
    ]),
    telefone: new FormControl('', [
      Validators.minLength(11),
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.email,
      Validators.required
    ]),
    mensagem: new FormControl('', [
      Validators.minLength(20),
      Validators.required
    ])
  });

  enviarFormulario() {
    alert('A mensagem foi enviada!');
    this.formContact.reset();
  }
}
