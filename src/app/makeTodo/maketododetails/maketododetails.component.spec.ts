import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaketododetailsComponent } from './maketododetails.component';

describe('MaketododetailsComponent', () => {
  let component: MaketododetailsComponent;
  let fixture: ComponentFixture<MaketododetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaketododetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaketododetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
