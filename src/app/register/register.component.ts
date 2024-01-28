import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {customValidators} from '../validations/validator'
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CardModule,
  InputTextModule,
  PasswordModule,
  ButtonModule,
  CommonModule,
  ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private fb:FormBuilder){}
  registerForm!: FormGroup;
  ngOnInit(){
    this.registerForm= this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email :['', [Validators.required, Validators.email]],
      userName: ['', [Validators.required,Validators.minLength(5), customValidators.noSpaceValidator()]],
      password: ['', [Validators.required, Validators.minLength(8), customValidators.passwordValidation()]]

    })
  }
  register(){
    console.log(this.registerForm.value)
    
  }
  isValid(){
    return this.registerForm.errors
  }

}
