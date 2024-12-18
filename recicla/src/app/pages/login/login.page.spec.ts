import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { Router } from '@angular/router';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
  });

  it('should create form on init', () => {
    component.ngOnInit();
    expect(true).toBeTruthy();
  });

  it('should go to home page on login', () => {
    spyOn(router, 'navigate');
    component.login(); // função de login
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });

  it('should go to register page when click on register button', () => {
    spyOn(router, 'navigate');
    component.register(); // função de login
    expect(router.navigate).toHaveBeenCalledWith(['register']);
  })

});
