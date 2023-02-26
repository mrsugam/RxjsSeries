import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit, OnDestroy {

  techStatus = '';
  techStatus2 = '';
  nameStatus = '';
  names : any;
  sub2!: Subscription;

  constructor(private designUtility: DesignUtilityService) {}

  ngOnInit(): void {
    // Ex - 01 (Manual)

    const cusObs1 = Observable.create((observer: any )=> {
      setTimeout(() => {
        observer.next('Angular');
      }, 1000);
      setTimeout(() => {
        observer.next('HTML, CSS');
      }, 2000);
      setTimeout(() => {
        observer.next('TypeScript');
        observer.complete();
      }, 3000);
      setTimeout(() => {
        observer.next('JavaScript');
       // observer.error(new Error('Limit Exceed'));

      }, 4000);
      setTimeout(() => {
        observer.next('Jquery');
      }, 5000);
    });

    cusObs1.subscribe((res: any) => {
     // console.log(res);
      this.designUtility.print(res, 'elContainer');
    },
    (err: any) => {
      this.techStatus = 'error'
    },
    () => {
      this.techStatus = 'completed'
    }
    )
    // subscribe(data, error, complete)

    // Ex - 02 (Custom Interval)

    const arr2 = ['Angular', 'JavaScript', 'Html', 'Css', 'TypeScript'];
    const cusObs2 = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(arr2[count]);
        if(count >= 2) {
          observer.error('Error Emit');
        }
        if(count >= 5) {
          observer.complete();
        }
        count++;
      }, 1000)
    });

    this.sub2 = cusObs2.subscribe((res: any) => {
     // console.log(res);
      this.designUtility.print(res, 'elContainer2')
    },
    (err: any) => {
      this.techStatus2 = 'error'
    },
    () => {
      this.techStatus2 = 'completed'
    });

    // Ex - 03 (Random Name)

    const arr3 = ['Sugam', 'Prakash', 'John', 'Alex', 'Amy', 'Anaya'];
    const cusObs3 = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(arr3[count]);
        if(count >= 2) {
          observer.error('Error Emit');
        }
        if(count >= 5 ) {
          observer.complete();
        }
        count++;
      }, 1000)
    })
    cusObs3.subscribe((res: any) => {
      console.log(res);
      this.names = res;
    },
    (err: any) => {
      this.nameStatus = 'error'
    },
    () => {
      this.nameStatus = 'completed'
    })

  }
  ngOnDestroy(): void {
    this.sub2.unsubscribe();
  }
}
