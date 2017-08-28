import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSitterComponent } from './edit-sitter.component';

describe('EditSitterComponent', () => {
  let component: EditSitterComponent;
  let fixture: ComponentFixture<EditSitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
