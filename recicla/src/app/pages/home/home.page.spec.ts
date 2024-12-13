import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { Router } from '@angular/router';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
  });

  it('it should go to pickup-calls when click on see all', () => {
    spyOn(router, 'navigate');
    component.goToPickupCalls();
    expect(router.navigate).toHaveBeenCalledWith(['pickup-calls'])
  });

  it('it should go to pick-up call when click on create new button', () => {
    spyOn(router, 'navigate');
    component.goToCreateNewPickUpCall();
    expect(router.navigate).toHaveBeenCalledWith(['pickup-call'])
  })
});
