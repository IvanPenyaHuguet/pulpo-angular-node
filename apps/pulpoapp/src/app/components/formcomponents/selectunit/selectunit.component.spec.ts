import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectunitComponent } from './selectunit.component';

describe('SelectunitComponent', () => {
  let component: SelectunitComponent;
  let fixture: ComponentFixture<SelectunitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectunitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
