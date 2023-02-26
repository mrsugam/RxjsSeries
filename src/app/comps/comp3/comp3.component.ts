import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {

  userName!: string;
  constructor(private designUtilityService: DesignUtilityService) {
    this.designUtilityService.username.subscribe(res => {
      this.userName = res;
    })
  }

  ngOnInit(): void {

  }
  onChnage(uname:any) {
    console.log(uname.value);
    this.designUtilityService.username.next(uname.value);
  }
}
