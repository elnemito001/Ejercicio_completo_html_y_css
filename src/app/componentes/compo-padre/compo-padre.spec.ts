import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoPadre } from './compo-padre';

describe('CompoPadre', () => {
  let component: CompoPadre;
  let fixture: ComponentFixture<CompoPadre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoPadre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoPadre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
