import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistidComponent } from './todolistid.component';

describe('TodolistidComponent', () => {
  let component: TodolistidComponent;
  let fixture: ComponentFixture<TodolistidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodolistidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodolistidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
