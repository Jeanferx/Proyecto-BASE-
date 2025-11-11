import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarUser } from './registrar-user';

describe('RegistrarUser', () => {
  let component: RegistrarUser;
  let fixture: ComponentFixture<RegistrarUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
