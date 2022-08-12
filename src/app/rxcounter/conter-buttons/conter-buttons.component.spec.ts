import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConterButtonsComponent } from './conter-buttons.component';

describe('ConterButtonsComponent', () => {
  let component: ConterButtonsComponent;
  let fixture: ComponentFixture<ConterButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConterButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConterButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
