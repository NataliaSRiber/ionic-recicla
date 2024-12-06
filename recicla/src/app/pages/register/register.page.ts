import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonInput, IonItem, IonButton, IonLabel, IonRadioGroup, IonRadio, IonButtons, IonBackButton, IonNav } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonRadio, IonRadioGroup, IonLabel, IonButton, IonItem, IonInput, IonCardTitle, IonCardContent, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RegisterPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }
  home() {
    this.router.navigate(['home']);
  }
}
