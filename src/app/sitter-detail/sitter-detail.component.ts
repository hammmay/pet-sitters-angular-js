import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Sitter } from '../sitter.model';
import { SitterService } from '../sitter.service';

@Component({
  selector: 'app-sitter-detail',
  templateUrl: './sitter-detail.component.html',
  styleUrls: ['./sitter-detail.component.css'],
  providers: [SitterService]
})

export class SitterDetailComponent implements OnInit {
  sitterId: number;
  sitterToDisplay: Sitter;

  constructor(private route: ActivatedRoute, private location: Location, private sitterService: SitterService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.sitterId = parseInt(urlParameters['id']);
    });
//    this.sitterToDisplay = this.sitterService.getSitterById(this.sitterId);
  }

}
