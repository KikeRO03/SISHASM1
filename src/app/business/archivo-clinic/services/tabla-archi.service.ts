import { Injectable } from '@angular/core';
import Tabla_arch from '../interfaces/Tabla_Arch';
@Injectable({
  providedIn: 'root'
})
export class TablaArchiService {
  tabla_data: Tabla_arch[]
  constructor() {
    this.tabla_data=
    [{
      expediente: "14423",
      nombre_paciente: 'alexiiis',
      ap_paterno: 'gomez',
      ap_materno: 'torres',
      sexo:'Masculino',
      edad: 12,
      curp: "GOTA040119HVZMRLA2",
      domicilio: "Gumercinda ramirez #3",
      telefono: "7838315029",
      fecha_elab: '21-02-2019',
      elaboro: 'Juanito banana',
      ubicacion:"farmacia",
      status: 1
    }]
   }
   agregarData(tabla: Tabla_arch){
    this.tabla_data.push(tabla)
      }
}

