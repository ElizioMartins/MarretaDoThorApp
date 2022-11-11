import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutBrancoComponent } from './layout-branco.component';

describe('LayoutBrancoComponent', () => {
  let component: LayoutBrancoComponent;
  let fixture: ComponentFixture<LayoutBrancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutBrancoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutBrancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
