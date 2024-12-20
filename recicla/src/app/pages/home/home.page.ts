import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonList, IonItem, IonAvatar, IonLabel, IonIcon, IonFab, IonFabButton, IonCard } from '@ionic/angular/standalone';
import { hourglassOutline, add } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { PickupCallCardComponent } from "../../components/pickup-call-card/pickup-call-card.component";
import { CardInformationDTO } from 'src/dto/card.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonCard, IonFabButton, IonFab, IonIcon, IonLabel, IonAvatar, IonItem, IonList, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton, PickupCallCardComponent]
})
export class HomePage implements OnInit {
  pickup: CardInformationDTO =
    {
      title: "On hold",
      date: "22/11/2024 16:04:00",
      icon: "hourglass-outline",
      iconColor: "warning",
      created: "02/12/2024",
      notes: "we have two bags that are full, one with plastic and the other with glasses",
      finished: false,
    };

  constructor(private router: Router) { 
    addIcons({hourglassOutline,add});
  };

  ngOnInit() {
  };

  goToPickupCalls() {
    this.router.navigate(['pickup-calls'])
  };

  goToCreateNewPickUpCall() {
    this.router.navigate(['pickup-call'])
  };

}
