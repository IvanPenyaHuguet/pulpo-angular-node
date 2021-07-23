import { Component, Input } from '@angular/core';
import { Service } from '../../models/interfaces/Exports';

@Component({
  selector: 'pulpoapp-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  service!: Service;
}
