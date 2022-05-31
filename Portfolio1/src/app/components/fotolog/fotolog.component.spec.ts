import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotologComponent } from './fotolog.component';

describe('FotologComponent', () => {
  let component: FotologComponent;
  let fixture: ComponentFixture<FotologComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotologComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotologComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
