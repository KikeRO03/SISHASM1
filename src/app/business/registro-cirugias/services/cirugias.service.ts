import { Injectable } from '@angular/core';
import Cirugias from '../interfaces/Cirugias';

@Injectable({
  providedIn: 'root'
})
export class CirugiasService {
  cirugias: Cirugias[];

  constructor() {
    this.cirugias = [
      {
        id: 1,
        fechaCirugia: "28/90/27",
        numCirugia: 1,
        numQuirofano: 1,
        numExpediente: 1,
        nomPaciente: "Enrique",
        apellidoPPaciente: "Ramirez",
        apellidoMPaciente: "Olmedo",
        nomCirujano: "Jesus",
        nomAnestesiologo: "Estesy",
        nomResidente: "Residente01",
        nomCirugia: "Cirugia01",
        nomEnfeInst: "EnfermeroInterno01",
        nomEnfeCir: "EnfermeroCirculante01",
        nomInterno: "Instrumentistsa01",
        EquipoExterno: "EquipoExterno01",
        tipoAnes: "TipoAnestecia01",
        iniciaAnes: "2024-04-03",
        finAnes: "2022-02-02",
        medicamento: "medicamento01",
        suturas: "susturas01",
        material: "material01",
        validCheck: "hola",
      },
      {
        id: 1,
        fechaCirugia: "28/90/27",
        numCirugia: 2,
        numQuirofano: 2,
        numExpediente: 2,
        nomPaciente: "Ivan",
        apellidoPPaciente: "Dominguez",
        apellidoMPaciente: "Alejo",
        nomCirujano: "Adolfo",
        nomAnestesiologo: "Jesus",
        nomResidente: "Residente02",
        nomCirugia: "Cirugia02",
        nomEnfeInst: "EnfermeroInterno02",
        nomEnfeCir: "EnfermeroCirculante02",
        nomInterno: "Intrumentista02",
        EquipoExterno: "equipo02",
        tipoAnes: "TipoAnestecia02",
        iniciaAnes: "2024-04-03",
        finAnes: "2022-02-02",
        medicamento: "medicamento02",
        suturas: "susturas02",
        material: "material02",
        validCheck: "hola02",
      }
    ]
   }
   //Metodo para llamarlo
   agregarPaciente(cirugias: Cirugias){
    this.cirugias.push(cirugias);

   }
}
