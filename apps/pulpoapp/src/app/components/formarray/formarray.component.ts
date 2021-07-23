import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServicesService } from '../../services/ExportServices';

@Component({
  selector: 'pulpoapp-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.scss'],
})
export class FormarrayComponent implements OnInit {
  group: FormGroup;

  constructor(
    private fb: FormBuilder,
    private servicesService: ServicesService,
    private router: Router,
    public alertController: AlertController
  ) {}

  addService(): void {
    const group: FormGroup = this.fb.group({
      title: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.maxLength(20)])
      ),
      price: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^([0-9]+(.?[0-9]?[0-9]?)?)'),
        ])
      ),
      units: new FormControl('Metro', Validators.required),
    });
    this.getServices().push(group);
  }

  deleteService(): void {
    this.getServices().removeAt(this.getServices().length - 1);
  }

  onSubmit(): void {
    if (this.group.valid) {
      this.servicesService.saveService(this.group.value.services).subscribe(
        async (res) => {
          const alert = await this.alertController.create({
            header: 'Éxito',
            subHeader: 'Guardado con éxito.',
            buttons: ['OK'],
          });
          await alert.present();
          this.router.navigate(['/services']);
        },
        async (err) => {
          const alert = await this.alertController.create({
            header: 'ERROR',
            subHeader: 'Error inesperado, vuelve a intetarlo',
            buttons: ['OK'],
          });
          await alert.present();
        }
      );
    }
  }

  ngOnInit(): void {
    this.group = new FormGroup({
      services: new FormArray([]),
    });
    this.addService();
  }

  getServices(): FormArray {
    return this.group.get('services') as FormArray;
  }
}
