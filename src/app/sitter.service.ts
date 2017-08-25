import { Injectable } from '@angular/core';
import { Sitter } from './sitter.model';
import { SITTERS } from './mock-sitters';

@Injectable()
export class SitterService {

  constructor() { }

  getSitters() {
    return SITTERS;
  }

  getSitterById(sitterId: number){
    for (var i = 0; i <= SITTERS.length - 1; i++) {
      if (SITTERS[i].id === sitterId) {
        return SITTERS[i];
      }
    }
  }

}
