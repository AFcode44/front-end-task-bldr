import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';


describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  // it('should be created', () => {
  //   const service: UserService = TestBed.get(UserService);
  //   expect(service).toBeTruthy();
  // });

  // it('should return true if user is already logged', () => {
  //   const service: UserService = TestBed.get(UserService);
  //   sessionStorage.setItem('userData', 'val');
  //   expect(service.isLogged()).toEqual(true);
  // });

  // it('should return false if is not logged', () => {
  //   const service: UserService = TestBed.get(UserService);
  //   expect(service.isLogged()).toEqual(true);
  // });

  // it('should set session storage during login', () => {
  //   const service: UserService = TestBed.get(UserService);
  //   service.login({ email: 'kot', password: 'pies' });
  //   expect(sessionStorage.getItem('userData')).toEqual('{"email":"kot","password":"pies"}');
  // });

  it('should return apriopriate message on isLoginCorret', () => {
    const service: UserService = TestBed.get(UserService);

    expect(service.isLoginCorrect({ email: '', password: '' })).toEqual('Invalid name format');
    expect(service.isLoginCorrect({ email: '4l', password: '' })).toEqual('Invalid name format');

    expect(service.isLoginCorrect({ email: 'aaaaa', password: '' })).toEqual('Invalid password format');
    expect(service.isLoginCorrect({ email: 'aaaaa', password: 'aaaaa' })).toEqual('Invalid password format');

    expect(service.isLoginCorrect({ email: 'aaaaa', password: 'aaaaaaaa' }))
      .toEqual('Password should contain exactly 8 character, one small and one capital letter and at least one number');
    expect(service.isLoginCorrect({ email: 'aaaaa', password: 'aaaaaaaA' }))
      .toEqual('Password should contain exactly 8 character, one small and one capital letter and at least one number');
    expect(service.isLoginCorrect({ email: 'aaaaa', password: 'aaaa4aaA' }))
      .toEqual('');
  });
});
