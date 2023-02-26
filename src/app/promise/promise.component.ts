import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  promiseVal:any;
  dell = { brand: 'Dell', hasdDisk: '2 TB', color: 'Black' };
  hp = { brand: 'HP', hasdDisk: '2 TB', color: 'Silver' };
  notAvail = { brand: 'Not Available', ststus: 'Failed' };


  constructor() {}

  dellAvailable() {
    return true;
  }

  hpAvailable() {
    return true;
  }

  ngOnInit(): void {

    // let buyLaptop = new Promise(function(resolve, reject) {
    //   resolve('Promise is resolved');
    // });

    let buyLaptop = new Promise((resolve, reject) => {

     // resolve('Promise is resolved');
    // reject('Promise is reject');

    if(this.dellAvailable()) {
      return setTimeout(() => {
       // resolve('Dell is Available');
       resolve(this.dell);
      }, 3000);
    } else if(this.hpAvailable()) {
      return setTimeout(() => {
       // resolve('HP is available');
       resolve(this.hp);
      }, 3000);
    } else {
      return setTimeout(() => {
        //reject('Laptop is not available on store');
        reject(this.notAvail);
      }, 3000);
    }
    });
    buyLaptop.then(res => {
      console.log('then code =>', res);
      this.promiseVal = res;
    }).catch(res => {
      console.log('catch code =>', res);
      this.promiseVal = res;
    })
  }
}
