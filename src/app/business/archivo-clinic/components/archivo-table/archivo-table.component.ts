import { Component } from '@angular/core';
import { TablaArchiService } from '../../services/tabla-archi.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-archivo-table',
  standalone: true,
  imports: [],
  templateUrl: './archivo-table.component.html',
  styleUrl: './archivo-table.component.css'
})
export class ArchivoTableComponent {
  constructor(public tabla_archive: TablaArchiService){}
  generatePdf() {
    const formData = {
      expediente: "14423",
      nombre_paciente: 'alexis',
      ap_paterno: 'gomez',
      ap_materno: 'torres',
      sexo:'Masculino',
      edad: 12,
      curp: "GOTA040119HVZMRLA2",
      domicilio: "Gumercinda ramirez #3",
      telefono: "7838315029",
      fecha_elab: '21-02-2019',
      elaboro: 'Roberto Cordoba Eli',
      ubicacion:"farmacia",
      status: 1
  };
  
  // Crear un nuevo documento PDF
  const doc = new jsPDF();
  
  // Agregar el contenido del formulario al PDF
  doc.text(`Expediente: ${formData.expediente}`, 10, 10);
  doc.text(`Nombre: ${formData.nombre_paciente}`, 10, 20);
  doc.text(`Apellido paterno: ${formData.ap_paterno}`, 10, 30);
  doc.text(`Apellido materno: ${formData.ap_materno}`, 10, 40);
  doc.text(`Sexo: ${formData.sexo}`, 10, 50);
  doc.text(`Edad: ${formData.sexo}`, 10, 60);
  doc.text(`Edad: ${formData.edad}`, 10, 70);
  doc.text(`Curp: ${formData.curp}`, 10, 80);
  doc.text(`Domicilio: ${formData.domicilio}`, 10, 90);
  doc.text(`Telefono: ${formData.telefono}`, 10, 100);
  doc.text(`Fecha: ${formData.fecha_elab}`, 10, 110);
  doc.text(`Elabora: ${formData.elaboro}`, 10, 120);
  doc.text(`Ubicacion: ${formData.ubicacion}`, 10, 130);
  
  // Guardar el PDF
  doc.save('formulario.pdf');
}
}
