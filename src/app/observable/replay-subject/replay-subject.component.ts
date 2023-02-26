import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {

  // List Data
  user1List = [
    'Angular 1',
    'Angular 2'
  ];
  user2List = [''];
  user3List = [''];

  // Subscribe Mood
  subscribeMode2:boolean = false;
  subscribeMode3:boolean = false;

  //Subscription
  subscription2!: Subscription;
  subscription3!: Subscription;

  //toggle Properties
  methodInterval: boolean = false;
  intervalSub!: Subscription;

  constructor(private designUtilityService: DesignUtilityService) {}

  ngOnInit(): void {
    this.designUtilityService.videoEmit.subscribe(res => {
      console.log(res);
      this.user1List.push(res);
    })
  }

  onVideoAdd(video:any) {
    //console.log(video);
    this.designUtilityService.videoEmit.next(video);
  }


  // User 2 Subscribe Button
  user2Subscribe() {
    if(this.subscribeMode2) {
      this.subscription2.unsubscribe();
    } else {
      this.subscription2 = this.designUtilityService.videoEmit.subscribe(res => {
        this.user2List.push(res)
      })
    }
    this.subscribeMode2 = !this.subscribeMode2;
  }

   // User 3 Subscribe Button
   user3Subscribe() {
    if(this.subscribeMode3) {
      this.subscription3.unsubscribe();
    } else {
      this.subscription3 = this.designUtilityService.videoEmit.subscribe(res => {
        this.user3List.push(res)
      })
    }
    this.subscribeMode3 = !this.subscribeMode3;
  }

  toggleMethod() {
   const broadCastVideo = interval(1000);
   if(!this.methodInterval) {
   this.intervalSub = broadCastVideo.subscribe(res => {
      this.designUtilityService.videoEmit.next(
        'video '+res
      )
     })
   } else {
    this.intervalSub.unsubscribe();
   }
    this.methodInterval = !this.methodInterval;
  }
}
