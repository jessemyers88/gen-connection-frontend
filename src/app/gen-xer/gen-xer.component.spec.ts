import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenXerComponent } from './gen-xer.component';

describe('GenXerComponent', () => {
  let component: GenXerComponent;
  let fixture: ComponentFixture<GenXerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenXerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenXerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
