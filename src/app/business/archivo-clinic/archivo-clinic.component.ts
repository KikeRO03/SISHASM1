import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TablaArchiService } from './services/tabla-archi.service';
import { RouterOutlet } from '@angular/router';
import { ArchivoTableComponent } from './components/archivo-table/archivo-table.component';
import Tabla_arch from './interfaces/Tabla_Arch';
import { CommonModule } from '@angular/common';
import { PdfComponent } from "./components/pdf/pdf.component";  
import Swal from 'sweetalert2';
@Component({
  selector: 'app-archivo-clinic',
  standalone: true,
  imports: [ReactiveFormsModule, RouterOutlet, ArchivoTableComponent, CommonModule, PdfComponent],
  templateUrl: './archivo-clinic.component.html',
  styleUrl: './archivo-clinic.component.css'
})
export default class ArchivoClinicComponent implements OnInit{
  constructor(public tabla_archive: TablaArchiService){}
  
  ngOnInit(): void {
  }

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
    localStorage.setItem('form', JSON.stringify(this.form.value));
    const formStorage = JSON.parse(localStorage.getItem('form')!) as Tabla_arch;
    
      console.log(this.form.value);
      this.tabla_archive.agregarData(this.form.value);
    
      }  
      resetForm(){
        this.form.reset();
      }
    ageOptions: number[] = [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

    confirmBox(){
      Swal.fire({
        title: 'Confirmado',
        text: 'Su registro se agrego correctamente',
        icon: 'success'

    })
  }
    
  }
    
