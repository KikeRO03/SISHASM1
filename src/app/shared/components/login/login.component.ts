import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent implements OnInit {
username: string = '';
password: string = '';


// logueado:boolean=false;


    loginForm!: FormGroup;
  
    constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }
  
    ngOnInit(): void {
     
    }
  
    login(): void{
      this.authService.login(this.username,this.password).subscribe({
        next:()=> this.router.navigate(['/dashboard']),
        error:(err)=>console.log('Login Ha Fallado',err)
      })
    }



   

}
