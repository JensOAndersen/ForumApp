import { TestBed, inject } from '@angular/core/testing';

import { ForumAPIService } from './forum-api.service';

describe('ForumAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForumAPIService]
    });
  });

  it('should be created', inject([ForumAPIService], (service: ForumAPIService) => {
    expect(service).toBeTruthy();
  }));
});
