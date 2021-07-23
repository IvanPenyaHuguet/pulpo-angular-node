import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecioinputComponent } from './precioinput.component';

describe('PrecioinputComponent', () => {
  let component: PrecioinputComponent;
  let fixture: ComponentFixture<PrecioinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrecioinputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecioinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
