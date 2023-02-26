import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  obsMsg:any;

  constructor(private designUtility: DesignUtilityService) {  }

  ngOnInit(): void {

      // OF
      const obs1 = of('Sugam', 'Prakash', 'John');
      obs1.subscribe(res => {
      // console.log(res);
        this.designUtility.print(res, 'elContainer');
      })

      const obs2 = of({a: 'Sugam', b: 'Prakash', c: 'John'});
      obs2.subscribe(res => {
        this.obsMsg = res;
      //  console.log('obsMsg =>', res);
      })

      // From - Array
    let arr = ['Alex', 'John', 'Amy'];
    const obs3 = from(arr);
    obs3.subscribe(res => {
    // console.log(res);
      this.designUtility.print(res, 'elContainer3');
    })

    // From Promise
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve('Promise Resolve');
      }, 3000);
    })
    const obs4 = from(promise);
    obs4.subscribe(res => {
      this.designUtility.print(res, 'elContainer4');
      console.log('from Promise => ', res)
    })

    // From String
    const obs5 = from('Welcome to Uxtrendz');
    obs5.subscribe(res => {
      this.designUtility.print(res, 'elContainer5');
      console.log('from String => ', res)
    })
  }

}
