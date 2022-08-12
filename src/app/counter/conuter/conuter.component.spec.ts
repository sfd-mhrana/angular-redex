import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConuterComponent } from './conuter.component';

describe('ConuterComponent', () => {
  let component: ConuterComponent;
  let fixture: ComponentFixture<ConuterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConuterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConuterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
