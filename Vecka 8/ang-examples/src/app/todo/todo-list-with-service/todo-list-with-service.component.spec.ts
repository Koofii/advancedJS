import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListWithServiceComponent } from './todo-list-with-service.component';

describe('TodoListWithServiceComponent', () => {
  let component: TodoListWithServiceComponent;
  let fixture: ComponentFixture<TodoListWithServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListWithServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListWithServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
