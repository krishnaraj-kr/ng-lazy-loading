import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontEndShellComponent } from './front-end-shell.component';

describe('FrontEndShellComponent', () => {
  let component: FrontEndShellComponent;
  let fixture: ComponentFixture<FrontEndShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontEndShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontEndShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
