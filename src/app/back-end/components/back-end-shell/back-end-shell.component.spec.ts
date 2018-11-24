import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEndShellComponent } from './back-end-shell.component';

describe('BackEndShellComponent', () => {
  let component: BackEndShellComponent;
  let fixture: ComponentFixture<BackEndShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackEndShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackEndShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
