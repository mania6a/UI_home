import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafficComponent } from './graffic.component';

describe('GrafficComponent', () => {
  let component: GrafficComponent;
  let fixture: ComponentFixture<GrafficComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrafficComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
