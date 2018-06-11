import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarNoPropsComponent } from './star-no-props.component';

describe('StarNoPropsComponent', () => {
  let component: StarNoPropsComponent;
  let fixture: ComponentFixture<StarNoPropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarNoPropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarNoPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
