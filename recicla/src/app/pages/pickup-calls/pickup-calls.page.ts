import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonIcon, IonItem, IonCardContent, IonCardHeader, IonCard, IonLabel } from '@ionic/angular/standalone';
import { hourglassOutline, add, archiveOutline, checkmarkOutline, trophy } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { PickupCallCardComponent } from "../../components/pickup-call-card/pickup-call-card.component";
import { CardInformationDTO } from 'src/dto/card.dto';

@Component({
  selector: 'app-pickup-calls',
  templateUrl: './pickup-calls.page.html',
  styleUrls: ['./pickup-calls.page.scss'],
  standalone: true,
  imports: [IonLabel, IonCard, IonCardContent, IonItem, IonIcon, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, PickupCallCardComponent]
})
export class PickupCallsPage implements OnInit {

  constructor() { 
    addIcons({hourglassOutline,archiveOutline,checkmarkOutline,trophy,add});
  }

  pickup: CardInformationDTO[] = [
    {
      title: "On hold",
      date: "22/11/2024 16:04:00",
      icon: "hourglass-outline",
      iconColor: "warning",
      created: "02/12/2024",
      notes: "we have two bags that are full, one with plastic and the other with glasses",
      finished: false,
    },
    {
      title: "Processing",
      date: "22/09/2024 16:04:00",
      icon: "archive-outline",
      iconColor: "secondary",
      created: "02/12/2024",
      notes: "we have two bags that are full, one with plastic and the other with glasses",
      finished: false,
    },
    {
      title: "Finished",
      date: "02/08/2024 09:04:00",
      icon: "checkmark-outline",
      iconColor: "primary",
      created: "Created at 02/12/2024",
      finished: true,
    },
  ]

  ngOnInit() {
  }

}
