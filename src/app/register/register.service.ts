// import { Injectable } from '@angular/core';
// import { Headers, Http } from '@angular/http';

// import 'rxjs/add/operator/toPromise';

// import { User } from './user';

// @Injectable()
// export class RegisterService {
//   private peopleUrl = 'api/people';
//   private headers = new Headers({'Content-Type': 'application/json'});

//   constructor(private http: Http) { }

//   getPeople(): Promise<Person[]> {
//     return this.http.get(this.peopleUrl)
//                     .toPromise()
//                     .then(response => response.json().data as Person[])
//                     .catch(this.handleError);
//   }

//   // delete(id: number): Promise<void> {
//   //   const url = `${this.personsUrl}/${id}`;
//   //   return this.http.delete(url, {headers: this.headers})
//   //     .toPromise()
//   //     .then(() => null)
//   //     .catch(this.handleError);
//   // }

//   create(firstName: string, lastName: string, username: string, email: string, password: string): Promise<Person> {
//     return this.http
//       .post(this.peopleUrl, JSON.stringify(
//           {firstName: firstName, lastName: lastName, username: username, email: email, password: password}), {headers: this.headers})
//       .toPromise()
//       .then(res => res.json().data as Person)
//       .catch(this.handleError);
//   }

//   // update(person: Person): Promise<ItePersonm> {
//   //   const url = `${this.personsUrl}/${person.id}`;
//   //   return this.http
//   //     .put(url, JSON.stringify(person), {headers: this.headers})
//   //     .toPromise()
//   //     .then(() => person)
//   //     .catch(this.handleError);
//   // }

//   private handleError(error: any): Promise<any> {
//     console.error('An error occurred', error); // for demo purposes only
//     return Promise.reject(error.message || error);
//   }

// }
