import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AusenciasService } from './Services/ausencias.service';

@Component({
  selector: 'app-ausencias',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ausencias.component.html',
  styleUrl: './ausencias.component.css'
})
export default class AusenciasComponent {


  constructor (public ausenciasService: AusenciasService){}

  ausenciasForm:FormGroup = new FormGroup
  ({
    numero_empleado: new FormControl(''),
    name: new FormControl(''),
    registro: new FormControl(''),
    autorizo: new FormControl(''),
    motivo: new FormControl(''),
    fecha_inicio: new FormControl(''),
    fecha_termino: new FormControl(''),
    turno: new FormControl(''),
    area: new FormControl(''),
  })

  agregarData(){
   
this.ausenciasService.agregarAusencia(this.ausenciasForm.value);
     
 
  }

  
 
 
  }
  
