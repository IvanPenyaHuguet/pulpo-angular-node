import { Component, Input } from '@angular/core';
import { Service } from '../../models/interfaces/Exports';

@Component({
  selector: 'pulpoapp-cardgroup',
  templateUrl: './cardgroup.component.html',
  styleUrls: ['./cardgroup.component.scss'],
})
export class CardgroupComponent {
  @Input() services: Service[];
}
