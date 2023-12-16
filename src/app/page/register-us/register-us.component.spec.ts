import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUsComponent } from './register-us.component';

describe('RegisterUsComponent', () => {
  let component: RegisterUsComponent;
  let fixture: ComponentFixture<RegisterUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterUsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
