import { Component } from '@angular/core';
import { Sitter } from '../sitter.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})

export class RosterComponent {
  constructor(private router: Router){}
  sitters: Sitter[] = [
   new Sitter("Mary", "Dogs, Cats", "Mary is from California.", "mary33@email.com", 1),
   new Sitter("Frank", "Cats, Snakes, Birds", "Frank loves animals.", "frank64@email.com", 2)
  ];
  goToDetailPage(clickedSitter: Sitter) {
     this.router.navigate(['sitters', clickedSitter.id]);
   };
}
