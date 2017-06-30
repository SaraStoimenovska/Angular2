// import { Injectable } from '@angular/core';
// import { Headers, Http } from '@angular/http';

// import 'rxjs/add/operator/toPromise';

// import { User } from '../register/user';
// import { AuthenticationService } from '../services/authentication.service';

// @Injectable()
// export class LoginService {
//   private peopleUrl = 'api/people';
//   private headers = new Headers({'Content-Type': 'application/json'});

//   constructor(private http: Http) { }

//   // getPeople(): Promise<Person[]> {
//   //   return this.http.get(this.peopleUrl)
//   //                   .toPromise()
//   //                   .then(response => response.json().data as Person[])
//   //                   .catch(this.handleError);
//   // }

//   login(): {
//     this.loading = true;
//     this.authenticationService.login(this.model.username, this.model.password)
//         .subscribe(result => {
//             if (result === true) {
//               this.router.navigate(['/']);
//             } else {
//               this.error = 'Username or password is incorrect';
//               this.loading = false;
//             }
//         });
//   }

//   // update(person: Person): Promise<ItePersonm> {
//   //   const url = `${this.personsUrl}/${person.id}`;
//   //   return this.http
//   //     .put(url, JSON.stringify(person), {headers: this.headers})
//   //     .toPromise()
//   //     .then(() => person)
//   //     .catch(this.handleError);
//   // }

//   // private handleError(error: any): Promise<any> {
//   //   console.error('An error occurred', error); // for demo purposes only
//   //   return Promise.reject(error.message || error);
//   // }

// }
