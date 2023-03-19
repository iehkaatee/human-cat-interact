import { Component } from '@angular/core';
import { IAnswer } from './shared/models/answer.model';
import { CatConnectService } from './shared/service/cat-connect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  _randCatObj!: any;
  _catSays!: string;
  _answers: IAnswer[] = [];
  _selectedItemId = -1;

  constructor(private catConnect: CatConnectService) { }

  get RandomCatUrl() {
    const basicUrl = this.catConnect.BaseUrl + this.RandomCatObject.url;
    return this.catSays ? basicUrl + '/says/' + this.catSays : basicUrl;
  }

  getNewCat(inputEl: HTMLInputElement) {

    if (inputEl.value != '') {
      this._answers.push({ id: this._answers.length, text: inputEl.value });

    }

    this._catSays = this.determineCatText(inputEl.value);
    inputEl.value = '';

    this.catConnect.getRandomCat().subscribe((cat) => {
      this._randCatObj = cat;
    });

    
  }

  determineCatText(inputText: string): string {
    if (inputText !== '') {
      return inputText;
    }

    // console.log(this._selectedItemId, this.answers)
    if (this.selectedItemId >= 0) {
      const selectedItem = this.answers.find((a) => {
        // console.log(a.id, ' vs ', this.selectedItemId);
        return a.id === this.selectedItemId;
      });
    
      // console.log(selectedItem);
      if (selectedItem) {
        return selectedItem.text;
      }
    }

    return '';
  }

  selectChange(e: any) {
    console.log(e.target.value);
    this._selectedItemId = +e.target.value;
  }

  get RandomCatObject() {
    return this._randCatObj;
  }

  get catSays() {
    return this._catSays;
  }

  get answers(): IAnswer[] {
    return this._answers;
  }

  get selectedItemId(): number{
    return this._selectedItemId;
  }
}
