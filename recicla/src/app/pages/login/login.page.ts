import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonInput, IonLabel, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { LoginPageForm } from './login.page.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonButton, IonLabel, IonInput, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonContent, CommonModule, FormsModule, ReactiveFormsModule]
})
export class LoginPage implements OnInit {
  form!: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();
  };

  login() {
    this.router.navigate(['home']);
  };

  register() {
    this.router.navigate(['register']);
  };

}
