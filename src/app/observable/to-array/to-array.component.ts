import { Component, OnInit } from '@angular/core';
import { interval, Subscription, toArray, take, from, of } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  sourceSub!: Subscription;

  users = [
    {name: 'Alex', skill: 'Angular'},
    {name: 'John', skill: 'HTML, CSS'},
    {name: 'Amy', skill: 'JavaScript'},
    {name: 'Anaya', skill: 'TypeScript'},
  ];

  constructor() {}

  ngOnInit() {

    // Ex - 1
    const source = interval(1000);
    this.sourceSub = source.pipe(
      take(5),
      toArray()
      )
    .subscribe(res => {
      console.log(res);
    });

    // Ex - 2
    const source2 = from(this.users);
    source2.pipe(toArray())
    .subscribe(res => {
     // console.log(res);
    });

    // Ex - 3
    const source3 = of('Alex', 'John', 'Amy', 'Neha');
    source3.pipe(toArray())
    .subscribe(res => {
      console.log(res);
    })

  }


}
