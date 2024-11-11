import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CirugiasService } from './services/cirugias.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-cirugias',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro-cirugias.component.html',
  styleUrl: './registro-cirugias.component.css'
})
export default class RegistroCirugiasComponent {

  constructor(public CirugiasService: CirugiasService){}
 
  cirugiaForm: FormGroup = new FormGroup({
    fechaCirugia: new FormControl('', ),
    numCirugia: new FormControl(''),
    numQuirofano: new FormControl (''),
    numExpediente: new FormControl(''),
    nomPaciente: new FormControl(''),
    apellidoPPaciente: new FormControl(''),
    apellidoMPaciente: new FormControl(''),
    nomCirujano: new FormControl(''),
    nomAnestesiologo: new FormControl(''),
    nomResidente: new FormControl(''),
    nomCirugia: new FormControl(''),
    nomEnfeInst: new FormControl(''),
    nomEnfeCir: new FormControl(''),
    nomInterno: new FormControl(''),
    EquipoExterno: new FormControl(''),
    tipoAnes: new FormControl(''),
    iniciaAnes: new FormControl(''),
    finAnes: new FormControl(''),
    medicamento: new FormControl(''),
    suturas: new FormControl(''),
    material: new FormControl(''),
    validCheck: new FormControl(false),
    
  });

  onSubmit() {
    console.log(this.cirugiaForm.value);

  }

  ConfirmarDatos() {
    if (this.cirugiaForm.valid) {
      Swal.fire({
        title: "¿Quieres guardar los cambios?",
        showCancelButton: true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          // Guardar datos y limpiar el formulario
          this.CirugiasService.agregarPaciente(this.cirugiaForm.value);
          sessionStorage.setItem('form', JSON.stringify(this.cirugiaForm.value));
          Swal.fire("Guardado!", "Los datos han sido guardados correctamente.", "success");
          
          // Limpia los campos del formulario
          this.cirugiaForm.reset();
        }
      });
    } else {
      Swal.fire("Error", "El formulario no es válido. Por favor, rellena todos los campos requeridos.", "error");
    }
  }
  




}
