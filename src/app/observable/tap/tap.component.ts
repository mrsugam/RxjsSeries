import { Component, OnInit } from '@angular/core';
import{ interval, map, Subscription, tap } from 'rxjs'
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {


  obsSubs!: Subscription;
  obsSubs2!: Subscription;
  myColor: string = '';
  constructor(private designUtilityService: DesignUtilityService) {}

  ngOnInit(): void {

    const source = interval(1000);


    //Ex - 01
    const nameArr = ['Rahul', 'Rohan', 'Raushan', 'Vikash', 'Ajay', 'Pankaj'];
    this.obsSubs = source.pipe(
      tap(data => {
      //  console.log('tap before => ' + data)
        if(data == 4) {
          this.obsSubs.unsubscribe();
        }
      }),
      map(data => nameArr[data]),
      // tap(data => console.log('tap after => ' + data))
      )
    .subscribe(res=> {
     // console.log(res);
      this.designUtilityService.print(res, 'elContainer')
    })

    // Ex - 02
    const colorArr = ['Red', 'Green', 'purple', 'Black', 'Orange', 'Yellow', 'blue'];
    this.obsSubs2 = source.pipe(
      tap(data => {
        this.myColor = colorArr[data];
        console.log('tap =>' + data)
        if(data == 7) {
          this.obsSubs2.unsubscribe();
        }
      }),
      map(data => colorArr[data])
      )
    .subscribe(res=> {
      console.log(res);
      this.designUtilityService.print(res, 'elContainer2')
    })

  }
}
