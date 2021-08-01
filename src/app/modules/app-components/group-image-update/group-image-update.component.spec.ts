import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupImageUpdateComponent } from './group-image-update.component';

describe('GroupImageUpdateComponent', () => {
  let component: GroupImageUpdateComponent;
  let fixture: ComponentFixture<GroupImageUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupImageUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupImageUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
