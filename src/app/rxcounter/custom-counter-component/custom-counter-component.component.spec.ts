import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCounterComponentComponent } from './custom-counter-component.component';

describe('CustomCounterComponentComponent', () => {
  let component: CustomCounterComponentComponent;
  let fixture: ComponentFixture<CustomCounterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomCounterComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCounterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
