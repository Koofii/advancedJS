import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWithPropsComponent } from './star-with-props.component';

describe('StarWithPropsComponent', () => {
  let component: StarWithPropsComponent;
  let fixture: ComponentFixture<StarWithPropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarWithPropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWithPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
