import { Inject,Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CardService {



  constructor(
    @Inject('apiUrl') private apiUrl: string, //injectin içine yazdığımız apiUrl , app.moduledeki providedan geliyor ---burada apiyi çağırıyoruz!!!
    private http: HttpClient
    ) {}
   

//   getCards(): Observable<Card[]>{
//     return this.http.get<Card[]>('http://demo.limantech.com/cards/public/api/cards');
//   }
// }

  getCards() {
    return this.http.get(this.apiUrl + '/cards');
  }
}
