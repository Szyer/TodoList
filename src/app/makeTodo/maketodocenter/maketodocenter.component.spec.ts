import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaketodocenterComponent } from './maketodocenter.component';

describe('MaketodocenterComponent', () => {
  let component: MaketodocenterComponent;
  let fixture: ComponentFixture<MaketodocenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaketodocenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaketodocenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
