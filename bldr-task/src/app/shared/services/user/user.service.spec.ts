import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  const httpClientMock = {};
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    const service: UserService = new UserService(httpClientMock as any);
    expect(service).toBeTruthy();
  });

});
