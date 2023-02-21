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
    return this.catConnect.BaseUrl + this.RandomCatObject.url;
  }

  getNewCat(inputEl: HTMLInputElement) {
    this._catSays = inputEl.value;
    inputEl.value = '';
    this.catConnect.getRandomCat().subscribe(cat => {
      // this._randoUrl = this.catConnect.BaseUrl + cat.url;
      this._randCatObj = cat;
    });
  }

  get RandomCatObject() {
    return this._randCatObj;
  }

}
