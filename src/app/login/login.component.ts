import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule,
     InputTextModule, 
     FormsModule,
    PasswordModule,
  ButtonModule,
CommonModule,
RouterLink,



],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isValid:boolean=false
  logInFormValues = {
    email:'',
    password:''
  }
  logIn(form : any){
    
    if (form.valid) {
      console.log(form.value);
      console.log(this.logInFormValues);
      
     
    } else {
      console.log('invalid')
      this.isValid=true
    }
  }

}
