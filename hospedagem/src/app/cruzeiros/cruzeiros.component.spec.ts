import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CruzeirosComponent } from './cruzeiros.component';

describe('CruzeirosComponent', () => {
  let component: CruzeirosComponent;
  let fixture: ComponentFixture<CruzeirosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CruzeirosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CruzeirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
