import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  exclusive = new Subject<boolean>();

  username = new BehaviorSubject<string>('Rahul');

  videoEmit = new ReplaySubject<string>(3, 5000);

  asyncVideoEmit = new AsyncSubject();

  constructor() { }

  print(val: any, containerId: string) {
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerId)?.appendChild(el);
  }

  print2(val: any, containerId: string) {
    let el = document.createElement('div');
    el.setAttribute('class', 'item');
    el.innerHTML = val;
    document.getElementById(containerId)?.prepend(el);
  }
}
