import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPageComponent } from './login-page.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user/user.service';
import { Store } from '@ngrx/store';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  const userServiceMock = {
    login: function () { }
  };

  const storeMock = {
    dispach: function() {}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        CommonModule,
        FormsModule
      ],
      declarations: [LoginPageComponent],
      providers: [
        { provide: UserService, useValue: userServiceMock },
        { provide: Store, useValue: storeMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

