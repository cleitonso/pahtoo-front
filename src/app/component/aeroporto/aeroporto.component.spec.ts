import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeroportoComponent } from './aeroporto.component';

describe('AeroportoComponent', () => {
  let component: AeroportoComponent;
  let fixture: ComponentFixture<AeroportoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AeroportoComponent]
    });
    fixture = TestBed.createComponent(AeroportoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
