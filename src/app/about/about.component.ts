import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [MdDialog]
})
export class AboutComponent   {

  constructor(public dialog: MdDialog) { }

  clickMe(): void {
    this.dialog.open(DialogComponent);
  }
}
@Component({
  selector: 'app-dialog-component',
  template: `
    <h1 md-dialog-title>Greeting</h1>
    <div md-dialog-content>Hello Sara. How are you?</div>
    <div md-dialog-actions>
      <button md-button md-dialog-close>Great!</button>
    </div>
  `
})
export class DialogComponent {
}
