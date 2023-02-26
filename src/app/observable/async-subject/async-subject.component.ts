import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {

  asyncVideoEmit:any ;
  constructor(private designUtilityService: DesignUtilityService) {}

  ngOnInit(): void {
    this.designUtilityService.asyncVideoEmit.subscribe(res => {
      this.asyncVideoEmit = res;
    })
  }

  onVideoAdd(video:any) {
    console.log(video);
    this.designUtilityService.asyncVideoEmit.next(video);
  }

  onComplte() {
    this.designUtilityService.asyncVideoEmit.complete();
  }

}
