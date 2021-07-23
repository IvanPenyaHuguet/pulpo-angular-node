import { Component, Input } from '@angular/core';

@Component({
  selector: 'pulpoapp-errormessage',
  templateUrl: './errormessage.component.html',
  styleUrls: ['./errormessage.component.scss'],
})
export class ErrormessageComponent {
  @Input() message: string;
}
