import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, take, takeLast, takeUntil, timer } from 'rxjs'
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  randomNames = ['Rahul', 'Rohon', 'Raushan' , 'Ajay', 'Deepak', 'Pankaj'];
  constructor(private designUtilityService : DesignUtilityService) {}

  ngOnInit(): void {

    const nameSource = from(this.randomNames);

    //Ex - 01
    nameSource.pipe(take(5))
    .subscribe(res => {
      console.log(res);
      this.designUtilityService.print(res, 'elContainer')
    });

    //Ex - 02
    nameSource.pipe(takeLast(3))
    .subscribe(res => {
      console.log(res);
      this.designUtilityService.print(res, 'elContainer2')
    });

    //Ex - 03
    const source = interval(1000);
    let condition1 = timer(6000);
    let condition2 = fromEvent(document, 'click');
    source.pipe(map(res => 'Number '+ res),
    takeUntil(condition2)
    )
    .subscribe(res => {
      console.log(res);
      this.designUtilityService.print(res, 'elContainer3')
    })
  }
}
