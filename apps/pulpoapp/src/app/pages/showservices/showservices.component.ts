import { Component, OnInit } from '@angular/core';
import { Service } from '../../models/interfaces/Exports';
import { Router } from '@angular/router';
import { ServicesService } from '../../services/ExportServices';

@Component({
  selector: 'pulpoapp-showservices',
  templateUrl: './showservices.component.html',
  styleUrls: ['./showservices.component.scss'],
})
export class ShowservicesComponent implements OnInit {
  services: Service[] = [];
  headerTitle: string;

  constructor(
    private servicesService: ServicesService,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  getData() {
    this.servicesService.getAllServices().subscribe(
      (res): void => {
        this.services = res;
      },
      (err): void => console.error(err)
    );
  }

  ionViewWillEnter() {
    this.getData();
  }

  ngOnInit() {
    this.headerTitle = 'Mis servicios';
  }
}
