import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'pulpoapp-selectunit',
  templateUrl: './selectunit.component.html',
  styleUrls: ['./selectunit.component.scss'],
})
export class SelectunitComponent {
  @Input() service: FormGroup;
}
