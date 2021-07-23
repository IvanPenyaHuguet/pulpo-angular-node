import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'pulpoapp-precioinput',
  templateUrl: './precioinput.component.html',
  styleUrls: ['./precioinput.component.scss'],
})
export class PrecioinputComponent {
  @Input() service: FormGroup;
}
