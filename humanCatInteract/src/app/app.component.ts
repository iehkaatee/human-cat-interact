import { Component } from '@angular/core';
import { CatConnectService } from './shared/service/cat-connect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  _randCatObj!: any;
  _catSays!: string;

  constructor(private catConnect: CatConnectService) { }

  get RandomCatUrl() {
    const basicUrl = this.catConnect.BaseUrl + this.RandomCatObject.url;
    return this.catSays ? basicUrl + '/says/' + this.catSays : basicUrl;
  }

  getNewCat(inputEl: HTMLInputElement) {
    this._catSays = inputEl.value;
    inputEl.value = '';
    this.catConnect.getRandomCat().subscribe(cat => {
      this._randCatObj = cat;
    });
  }

  get RandomCatObject() {
    return this._randCatObj;
  }

  get catSays() {
    return this._catSays;
  }

}
