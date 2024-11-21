import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import Aos from 'aos';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="bg-white py-24 sm:py-32 lg:py-36 dark:bg-gray-900" id="contacto">
      <form
        [formGroup]="contactForm"
        (ngSubmit)="onSubmit()"
        method="POST"
        data-netlify="true"
        name="contact"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div>
          <label for="name">Nombre</label>
          <input
            id="name"
            formControlName="name"
            name="name"
            type="text"
            required
          />
          <div *ngIf="contactForm.get('name')?.invalid && contactForm.get('name')?.touched">
            Nombre es requerido
          </div>
        </div>

        <div>
          <label for="email">Correo</label>
          <input
            id="email"
            formControlName="email"
            name="email"
            type="email"
            required
          />
          <div *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched">
            Correo válido es requerido
          </div>
        </div>

        <div>
          <label for="message">Mensaje</label>
          <textarea
            id="message"
            formControlName="message"
            name="message"
            required
          ></textarea>
          <div *ngIf="contactForm.get('message')?.invalid && contactForm.get('message')?.touched">
            Mensaje es requerido
          </div>
        </div>

        <button type="submit" [disabled]="contactForm.invalid">Enviar</button>
      </form>
    </div>
  `,
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Formulario enviado:', this.contactForm.value);
    }
  }
}
