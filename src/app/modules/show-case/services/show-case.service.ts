import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ShowCaseService {


  constructor() { }

  getDataApi(): Observable<any> {
    //TODO: Aqui podemos hacer http.get('api...')
    const data = [
      {
        name: "Pudgy Penguin #1",
        price: 0.2,
        image: "https://media.giphy.com/media/PlUORM05joQ1LGblRS/giphy.gif"
      },
      {
        name: "Pudgy Penguin #2",
        price: 0.1,
        image: "https://media2.giphy.com/media/UfomWpozr08bupDf7M/giphy.gif"
      },
      {
        name: "Pudgy Penguin #3",
        price: 0.3,
        image: "https://media.giphy.com/media/H9ISfuoGeHAKVK0w6O/giphy.gif"
      },
      {
        name: "Pudgy Penguin #4",
        price: 0.4,
        image: "https://media.giphy.com/media/CPIgwiKZZnEiyC1FTE/giphy.gif"
      },
      {
        name: "Pudgy Penguin #5",
        price: 0.5,
        image: "https://media.giphy.com/media/9w64W89cyzfPbLpz2o/giphy.gif"
      },
      {
        name: "Pudgy Penguin #6",
        price: 0.6,
        image: "https://media.giphy.com/media/bwEHk1cj8Nwf6TRAcf/giphy.gif"
      },
      {
        name: "Pudgy Penguin #7",
        price: 0.7,
        image: "https://media.giphy.com/media/duurMTXJL14WG9Kq6R/giphy.gif"
      },
      {
        name: "Pudgy Penguin #8",
        price: 0.8,
        image: "https://media.giphy.com/media/jpDfOhfcES70qmt0w6/giphy.gif"
      },
      {
        name: "Pudgy Penguin #9",
        price: 0.9,
        image: "https://media.giphy.com/media/gh08oFnHepVko5TmuO/giphy.gif"
      },
      {
        name: "Pudgy Penguin #10",
        price: 0.9,
        image: "https://media.giphy.com/media/22RDRgNhJ6hjb7CJUa/giphy.gif"
      },
      {
        name: "Pudgy Penguin #11",
        price: 0.9,
        image: "https://media.giphy.com/media/uV6RgzRDENYcq1E7E0/giphy.gif"
      },
      {
        name: "Pudgy Penguin #12",
        price: 0.9,
        image: "https://media.giphy.com/media/MuHY91COZZHpKX38rE/giphy.gif"
      }
    ]

    return of(data).pipe(
      delay(1500)
    )
  }



}
