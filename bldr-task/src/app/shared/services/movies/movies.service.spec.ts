import { TestBed } from '@angular/core/testing';

import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  const httpClientMock = {};
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesService = new MoviesService(httpClientMock as any);
    expect(service).toBeTruthy();
  });
});
