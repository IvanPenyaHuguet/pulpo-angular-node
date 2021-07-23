import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pulpoapp-root',
  templateUrl: './createservices.component.html',
  styleUrls: ['./createservices.component.scss'],
})
export class CreateservicesComponent implements OnInit {
  headerTitle: string;
  headerReturn: boolean;

  ngOnInit() {
    this.headerTitle = 'Crear servicios';
    this.headerReturn = true;
  }
}
