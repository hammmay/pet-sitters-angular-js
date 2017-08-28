import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Sitter } from '../sitter.model';
import { SitterService } from '../sitter.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-sitter-detail',
  templateUrl: './sitter-detail.component.html',
  styleUrls: ['./sitter-detail.component.css'],
  providers: [SitterService]
})

export class SitterDetailComponent implements OnInit {
  sitterId: string;
  sitterToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private sitterService: SitterService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.sitterId = urlParameters['id'];
    });
    this.sitterToDisplay = this.sitterService.getSitterById(this.sitterId);
  }

}
