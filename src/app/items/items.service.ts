import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Item } from './item';

@Injectable()
export class ItemsService {
  private itemsUrl = 'api/items';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getItems(): Promise<Item[]> {
    return this.http.get(this.itemsUrl)
                    .toPromise()
                    .then(response => response.json().data as Item[])
                    .catch(this.handleError);
  }

  getItemById(id: number): Promise<Item> {
    const url = `${this.itemsUrl}/${id}`;
    return this.http.get(url)
                    .toPromise()
                    .then(response => response.json().data as Item)
                    .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.itemsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string, author: string): Promise<Item> {
    return this.http
      .post(this.itemsUrl, JSON.stringify({name: name, author: author}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Item)
      .catch(this.handleError);
  }

  update(item: Item): Promise<Item> {
    const url = `${this.itemsUrl}/${item.id}`;
    return this.http
      .put(url, JSON.stringify(item), {headers: this.headers})
      .toPromise()
      .then(() => item)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
