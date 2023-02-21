import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CatConnectService {

  _url = 'https://cataas.com';

  constructor(private http: HttpClient) { }

  getRandomCat() {
    return this.http.get(this._url + '/cat?json=true');
  }

  get BaseUrl() {
    return this._url;
  }
}
