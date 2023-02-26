import { Component, OnInit } from '@angular/core';
import { interval, take, map, concat } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  constructor(private designUtilityService: DesignUtilityService) {}

  ngOnInit(): void {

    const sourceTech = interval(1000).pipe( map(v=> 'Tech Video # ' + (v+1)),take(5));
    const sourceComedy = interval(1000).pipe( map(v=> 'Comedy Video # ' + (v+1)),take(3));
    const sourceNews = interval(1000).pipe( map(v=> 'News Video # ' + (v+1)),take(4));

    const finalData = concat(sourceTech, sourceComedy, sourceNews);

    finalData.subscribe(res => {
      console.log(res);
      this.designUtilityService.print(res, 'elContainer')
    })
  }
}
