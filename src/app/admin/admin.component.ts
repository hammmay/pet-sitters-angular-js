
import { Component, OnInit } from '@angular/core';
import { SitterService } from '../sitter.service';
import { Sitter } from '../sitter.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [SitterService]
})

export class AdminComponent implements OnInit {

  constructor(private sitterService: SitterService) { }

  ngOnInit() {
  }

  submitForm(name: string, animal: string, bio: string, email: string) {
    var newSitter: Sitter = new Sitter(name, animal, bio, email);
    this.sitterService.addSitter(newSitter);
  }

}
