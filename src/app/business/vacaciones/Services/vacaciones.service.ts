import { Injectable } from '@angular/core';
import VacacionesComponent from '../vacaciones.component';
import vacaciones from '../Interfaces/vacaciones';

@Injectable({
  providedIn: 'root'
})
export class VacacionesService {

  vacaciones: vacaciones[];

  constructor() {
    this.vacaciones = [
      {

    numero_empleado:1, 
    name:"Ivan",
    registro: "Oliver",
    area:"X",
    autorizo: "Nayomi",
    estado:"Aprobado",
    fecha_inicio:"2023-10-2024",
    fecha_termino:"2024-10-2024",
    turno:"Matutino",
    
    }]
    
   }

agregarvacaciones(vacaciones: vacaciones){
  this.vacaciones.push(vacaciones)
}
   
}

