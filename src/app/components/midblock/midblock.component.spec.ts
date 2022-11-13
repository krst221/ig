import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidblockComponent } from './midblock.component';

describe('MidblockComponent', () => {
  let component: MidblockComponent;
  let fixture: ComponentFixture<MidblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidblockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
