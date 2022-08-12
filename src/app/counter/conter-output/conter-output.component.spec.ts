import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConterOutputComponent } from './conter-output.component';

describe('ConterOutputComponent', () => {
  let component: ConterOutputComponent;
  let fixture: ComponentFixture<ConterOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConterOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConterOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
