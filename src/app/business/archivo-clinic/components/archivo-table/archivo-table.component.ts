import { Component } from '@angular/core';
import { TablaArchiService } from '../../services/tabla-archi.service';

@Component({
  selector: 'app-archivo-table',
  standalone: true,
  imports: [],
  templateUrl: './archivo-table.component.html',
  styleUrl: './archivo-table.component.css'
})
export class ArchivoTableComponent {
  constructor(public tabla_archive: TablaArchiService){}

}
