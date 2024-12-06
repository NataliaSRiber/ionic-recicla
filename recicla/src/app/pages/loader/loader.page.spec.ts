import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { LoaderPage } from './loader.page';
import { Router } from '@angular/router';
import { navigate } from 'ionicons/icons';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  let router: Router;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router); // instancian abre o componente
  });

  it('should go to login page after load', fakeAsync (() => {
    spyOn(router, 'navigate'); // the function should watch the navigation function
    component.ngOnInit();

    tick(1500); // torna o teste assíncrono e ele deve esperar 1500
    expect(router.navigate).toHaveBeenCalledWith(['login']);
  }));
});
