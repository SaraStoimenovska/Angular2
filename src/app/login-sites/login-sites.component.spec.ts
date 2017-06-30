import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSitesComponent } from './login-sites.component';

describe('LoginSitesComponent', () => {
  let component: LoginSitesComponent;
  let fixture: ComponentFixture<LoginSitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
