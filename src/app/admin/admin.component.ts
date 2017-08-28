import { Component, OnInit } from '@angular/core';
import { Sitter } from '../sitter.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(name: string, animal: string, bio: string, email: string) {
    var newSitter: Sitter = new Sitter(name, animal, bio, email);
    console.log(newSitter);
  }

}
