import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-archivo',
  standalone: true,
  imports: [ReactiveFormsModule,RouterOutlet, CommonModule],
  templateUrl: './archivo.component.html',
  styleUrl: './archivo.component.css'
})
export default class ArchivoComponent {
  form: FormGroup = new FormGroup
  ({
   expediente: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    ap_paterno: new FormControl('', Validators.required),
    ap_materno: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.required),
    curp: new FormControl('', Validators.required),
    domicilio: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
    elabora: new FormControl('', Validators.required),
    ubicacion: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
  });

  agregarData(){
   
    
      }  
      resetForm(){
        this.form.reset();
      }
    ageOptions: number[] = [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  
  
  
  }


