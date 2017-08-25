import { Injectable } from '@angular/core';
import { Sitter } from './sitter.model';
import { SITTERS } from './mock-sitters';

@Injectable()
export class SitterService {

  constructor() { }

  getSitters() {
    return SITTERS;
  }
}
