import { Component, OnInit } from '@angular/core';
import { interval, take, map, merge } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {

  constructor(private designUtilityService: DesignUtilityService) {}

  ngOnInit(): void {

    const sourceTech = interval(3000).pipe( map(v=> 'Tech Video # ' + (v+1)),take(5));
    const sourceComedy = interval(6000).pipe( map(v=> 'Comedy Video # ' + (v+1)),take(3));
    const sourceNews = interval(3500).pipe( map(v=> 'News Video # ' + (v+1)),take(4));

    const finalData = merge(sourceTech, sourceComedy, sourceNews);

    finalData.subscribe(res => {
      console.log(res);
      this.designUtilityService.print(res, 'elContainer')
    })
  }

}
