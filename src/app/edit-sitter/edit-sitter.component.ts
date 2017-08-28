import { Component, Input, OnInit } from '@angular/core';
import { SitterService } from '../sitter.service';

@Component({
  selector: 'app-edit-sitter',
  templateUrl: './edit-sitter.component.html',
  styleUrls: ['./edit-sitter.component.css'],
  providers: [SitterService]
})

export class EditSitterComponent implements OnInit {
  @Input() selectedSitter;

  constructor(private sitterService: SitterService) { }

  ngOnInit() {
  }

  beginUpdatingSitter(sitterToUpdate){
    this.sitterService.updateSitter(sitterToUpdate);
  }

  beginDeletingSitter(sitterToDelete){
    if(confirm("You sure?")){
      this.sitterService.deleteSitter(sitterToDelete);
    }
  }
}
