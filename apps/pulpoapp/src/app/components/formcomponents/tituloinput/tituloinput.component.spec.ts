import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloinputComponent } from './tituloinput.component';

describe('TituloinputComponent', () => {
  let component: TituloinputComponent;
  let fixture: ComponentFixture<TituloinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloinputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
