import { Component, Input } from '@angular/core';

@Component({
  selector: 'pulpoapp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() title!: string;

  @Input() return = false;
}
