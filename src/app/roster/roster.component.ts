import { Component, OnInit } from '@angular/core';
import { Sitter } from '../sitter.model';
import { Router } from '@angular/router';
import { SitterService } from '../sitter.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
  providers: [SitterService]
})

export class RosterComponent implements OnInit {
  sitters: FirebaseListObservable<any[]>;

  constructor(private router: Router, private sitterService: SitterService){}

  ngOnInit(){
    this.sitters = this.sitterService.getSitters();
  }

  goToDetailPage(clickedSitter: Sitter) {
//     this.router.navigate(['sitters', clickedSitter.id]);
   };
}

////
