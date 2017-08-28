import { Injectable } from '@angular/core';
import { Sitter } from './sitter.model';
//import { SITTERS } from './mock-sitters';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class SitterService {
    sitters: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.sitters = database.list('sitters');
  }

  getSitters() {
    return this.sitters;
  }

  addSitter(newSitter: Sitter) {
    this.sitters.push(newSitter);
  }

  getSitterById(sitterId: number){
    // for (var i = 0; i <= SITTERS.length - 1; i++) {
    //   if (SITTERS[i].id === sitterId) {
    //     return SITTERS[i];
    //   }
    // }
  }

}
