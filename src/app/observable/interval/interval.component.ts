import { Component, OnInit } from '@angular/core';
import { interval, timer, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  obsMessage = '';
  videoSubscription!: Subscription;

  constructor(private designUtility: DesignUtilityService) {}

  ngOnInit(): void {
    //const broadCastVideo = interval(1000);
    // timer(delay, interval)
    const broadCastVideo = timer(5000, 1000);
    this.videoSubscription = broadCastVideo.subscribe(res => {
      console.log(res);
      this.obsMessage = 'Video '+ res;
      this.designUtility.print(this.obsMessage, 'elContainer');
      this.designUtility.print(this.obsMessage, 'elContainer2');
      this.designUtility.print(this.obsMessage, 'elContainer3');
      if(res >= 5) {
        this.videoSubscription.unsubscribe();
      }
    })
  }

}
