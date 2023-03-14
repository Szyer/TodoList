import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaketodohomeComponent } from './maketodohome.component';

describe('MaketodohomeComponent', () => {
  let component: MaketodohomeComponent;
  let fixture: ComponentFixture<MaketodohomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaketodohomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaketodohomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
