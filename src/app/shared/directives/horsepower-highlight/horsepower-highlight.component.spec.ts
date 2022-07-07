import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorsepowerHighlightComponent } from './horsepower-highlight.component';

describe('HorsepowerHighlightComponent', () => {
  let component: HorsepowerHighlightComponent;
  let fixture: ComponentFixture<HorsepowerHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorsepowerHighlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorsepowerHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
