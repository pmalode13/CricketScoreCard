import { Component, OnInit } from '@angular/core';
import { CommentryService } from '../Services/commentry.service';

@Component({
  selector: 'app-commentry',
  templateUrl: './commentry.component.html',
  styleUrls: ['./commentry.component.css']
})
export class CommentryComponent implements OnInit {

 // cmm;
 
  constructor(public comm:CommentryService) {
    //this.cmm=comm.coMMentry;
    //console.log(this.cmm[0]);
  
    console.log(comm.coMMentry[0]);
   }
   
  ngOnInit() {
  }

}
