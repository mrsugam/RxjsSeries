import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {

  userName!:string;
  constructor(private designUtilityService: DesignUtilityService) {
    this.designUtilityService.username.subscribe(res => {
      this.userName = res;
    })
  }

  ngOnInit(): void {
    this.designUtilityService.exclusive.next(true);
  }

  ngOnDestroy(): void {
    this.designUtilityService.exclusive.next(false);
  }
}
