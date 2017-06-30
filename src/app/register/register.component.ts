import { Component, OnInit, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

// import { User } from './user';
// import { RegisterService } from './register.service'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MdDialog]
})
export class RegisterComponent {
  // person: Person;
  // people: Person[];
  model: any = {};
  loading = false;

  constructor(private location: Location,
              public dialog: MdDialog,
              private router: Router,
              private userService: UserService) { }

  // ngOnInit() {
  //   this.model.firstName = '';
  //   // this.getPeople();
  //   // console.log(this.getPeople());
  // }

  cancel(): void {
    this.location.back();
  }


  // getPeople(): void {
  //   this.registerService.getPeople()
  //       .then(people => this.people = people);
  // }

  // register(firstName: string, lastName: string, username: string, email: string, password: string): void {
  //   this.registerService.create(firstName, lastName, username, email, password)
  //     .then(person => {
  //       this.people.push(person);
  //     });
  //     const dialogRef = this.dialog.open(RegisterDialogComponent, {
  //       data: this.model.firstName,
  //     });
  //     setTimeout(() => dialogRef.close(this.router.navigate(['../login'])), 3000);
  // }

  register() {
        this.loading = true;
        // const dialogRef = this.dialog.open(RegisterDialogComponent, {
        //   data: this.model.firstName,
        // });
        // setTimeout(() => dialogRef.close(), 1000);
        this.userService.create(this.model)
            .subscribe(
                data => {
                    alert('Registration successful');
                    this.router.navigate(['/login']);
                },
                error => {
                    alert(error);
                    this.loading = false;
                });
    }

}
@Component({
  selector: 'app-register-dialog-component',
  template: `
    <h1 md-dialog-title>Registration Form</h1>
    <div md-dialog-content>Hello <b>{{ user }}</b>.
      <br />
      Your registration has been successful!
    </div>
  `
})
export class RegisterDialogComponent {
  constructor( @Inject(MD_DIALOG_DATA) public user: any) { }
}
