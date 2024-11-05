import { Component, OnInit } from '@angular/core';

import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import LoginComponent from '../login/login.component';
import SidebarComponent from '../sidebar/sidebar.component';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SidebarComponent, FooterComponent, HeaderComponent, RouterOutlet, LoginComponent,],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export default  class LayoutComponent implements OnInit {
  headerStatus: boolean = false;
  logueado: boolean= false;


  
constructor(private authService:AuthService){}
  ngOnInit(): void {
    this.logueado= this.authService.isAuthenticated();
  }
 

}
