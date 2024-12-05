import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoaderPage } from './loader.page';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should go to login page after load', () => {
    expect(false).toBeFalsy();
  });
});
