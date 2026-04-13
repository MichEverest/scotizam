import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'cotizacion-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './form.html',
  styleUrls: ['./form.scss']
})
export class Form {

  form: any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      cliente: ['', Validators.required],
      items: this.fb.array([])
    });

    this.addItem();
  }

  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }

  addItem() {
    this.items.push(
      this.fb.group({
        producto: ['', Validators.required],
        cantidad: [1, Validators.required],
        precio: [0, Validators.required]
      })
    );
  }

  removeItem(i: number) {
    this.items.removeAt(i);
  }

  get total(): number {
    return this.items.value.reduce(
      (acc: number, item: any) => acc + (item.cantidad * item.precio),
      0
    );
  }

  submit() {
    if (this.form.invalid) {
      console.warn('Formulario inválido');
      return;
    }

    console.log('Datos enviados:', this.form.value);

    // opcional: reset
    this.form.reset();
    this.items.clear();
    this.addItem();
  }

}