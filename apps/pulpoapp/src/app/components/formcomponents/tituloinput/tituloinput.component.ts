import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'pulpoapp-tituloinput',
  templateUrl: './tituloinput.component.html',
  styleUrls: ['./tituloinput.component.scss'],
})
export class TituloinputComponent {
  @Input() service: FormGroup;
}
