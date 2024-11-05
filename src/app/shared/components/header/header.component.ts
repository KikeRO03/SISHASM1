import { Component, EventEmitter, OnInit, Output, Pipe,} from '@angular/core';
import { FechaserviceService } from '../../services/fechaservice.service';
import { DatePipe } from '@angular/common';
import { log } from 'console';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent   {

  // logueado: boolean = false;
user: string="Usuario";
//user: string= "Martin, Perez";
currentDate: Date = new Date();

constructor(private fechaService: FechaserviceService,private authService: AuthService, private router: Router){
  
}
  // ngOnInit(): void {
  //   this.fechaService.dateObs.subscribe(currentDate =>{
  //     this.currentDate = currentDate;
     
  //   });



  @Output() sideNavToggle=new EventEmitter<boolean>();
  menuStatus: boolean = false;
 
    SideNavToggle(){
      this.menuStatus = !this.menuStatus;
      this.sideNavToggle.emit(this.menuStatus)
    }

 

    logout(): void{
     this.authService.logout();
    }
  }


    
  



