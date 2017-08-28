import { Injectable } from '@angular/core';
import { Sitter } from './sitter.model';
//import { SITTERS } from './mock-sitters';//
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

  getSitterById(sitterId: string){
    return this.database.object('/sitters/' + sitterId);
  }

  updateSitter(localUpdatedSitter){
    var sitterEntryInFirebase = this.getSitterById(localUpdatedSitter.$key);
    sitterEntryInFirebase.update({name: localUpdatedSitter.name,
                                animal: localUpdatedSitter.animal,
                                bio: localUpdatedSitter.bio,
                                email: localUpdatedSitter.email});
  }

  deleteSitter(localSitterToDelete){
    var sitterEntryInFirebase = this.getSitterById(localSitterToDelete.$key);
    sitterEntryInFirebase.remove();
  }
}
