import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(public formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      fullName:['',Validators.required],
      userName:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(40)]],
      confirmPassword:['',[Validators.required,Validators.minLength(6),Validators.maxLength(40)]],
      acceptTerms:[false,Validators.requiredTrue]
      
    })
  }

  registerForm!:FormGroup
  submitted = false;

  onSubmit()
  { 
    this.submitted= true

    if(this.registerForm.invalid){
      return
    }
    alert("Success");
    // console.warn(this.profileForm.value);
  }
}