import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabbuttonComponent } from './fabbutton.component';

describe('FabbuttonComponent', () => {
  let component: FabbuttonComponent;
  let fixture: ComponentFixture<FabbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FabbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
