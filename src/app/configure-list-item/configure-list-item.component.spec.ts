import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureListItemComponent } from './configure-list-item.component';

describe('ConfigureListItemComponent', () => {
  let component: ConfigureListItemComponent;
  let fixture: ComponentFixture<ConfigureListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
