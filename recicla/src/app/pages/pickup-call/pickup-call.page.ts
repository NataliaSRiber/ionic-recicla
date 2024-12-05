import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonCard, IonCardContent, IonList, IonItem, IonLabel, IonText, IonTextarea, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-pickup-call',
  templateUrl: './pickup-call.page.html',
  styleUrls: ['./pickup-call.page.scss'],
  standalone: true,
  imports: [IonButton, IonTextarea, IonLabel, IonItem, IonList, IonCardContent, IonCard, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PickupCallPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
