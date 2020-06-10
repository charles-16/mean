import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectBiasComponent } from './detect-bias.component';

describe('DetectBiasComponent', () => {
  let component: DetectBiasComponent;
  let fixture: ComponentFixture<DetectBiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectBiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectBiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
