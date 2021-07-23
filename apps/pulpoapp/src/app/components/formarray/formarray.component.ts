import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
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
    private router: Router
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
        (res) => {
          this.router.navigate(['/services']);
        },
        (err) => console.error(err)
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
