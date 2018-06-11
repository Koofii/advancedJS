import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListOptimisticComponent } from './todo-list-optimistic.component';

describe('TodoListOptimisticComponent', () => {
  let component: TodoListOptimisticComponent;
  let fixture: ComponentFixture<TodoListOptimisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListOptimisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListOptimisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
