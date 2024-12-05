import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonItem, IonLabel, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonIcon, IonButton } from '@ionic/angular/standalone';
import { CardInformationDTO } from 'src/dto/card.dto';


@Component({
  selector: 'app-pickup-call-card',
  standalone: true,
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
  imports: [IonButton, IonIcon, IonCardContent, IonCardSubtitle, IonCard, IonLabel, IonItem, CommonModule, FormsModule, IonCardHeader],
})
export class PickupCallCardComponent  implements OnInit {
  @Input() hasHeader : boolean = true;
  @Input() hasDescription: boolean = true;
  @Input() data: CardInformationDTO | undefined;

  constructor() { }

  ngOnInit() {}

}
