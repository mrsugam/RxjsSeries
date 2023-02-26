import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';
import { from, of, concatMap, mergeMap, delay } from 'rxjs'

@Component({
  selector: 'app-concatmap2',
  templateUrl: './concatmap2.component.html',
  styleUrls: ['./concatmap2.component.scss']
})
export class Concatmap2Component implements OnInit {


  notifyData = [
    {
      name: 'Facebook',
      icon: 'assets/fb-icon.png',
      time: '4 Second Ago.',
      img: 'https://www.nicepng.com/png/detail/249-2492461_product-image-acc-cement-logo-png.png',
      strong: 'Acc Cement',
      p: 'Comented on my Channel Post: Awosome Post !!! Thanks'
    },
    {
      name: 'Twitter',
      icon: 'assets/twitter-icon.png',
      time: '3 Second Ago.',
      img: 'https://www.shreecement.com/uploads/our-business-list/cementbags1_2.png',
      strong: 'Adani News',
      p: 'Comented on my Channel Post: Awosome Post !!! Thanks'
    },
    {
      name: 'Facebook',
      icon: 'assets/fb-icon.png',
      time: '2 Second Ago.',
      img: 'https://www.pngall.com/wp-content/uploads/13/Stock-Market-PNG-File.png',
      strong: 'Share Market',
      p: 'Comented on my Channel Post: Awosome Post !!! Thanks'
    },
    {
      name: 'Instagram',
      icon: 'assets/insta-icon.png',
      time: '1 Second Ago.',
      img: 'https://png.pngitem.com/pimgs/s/201-2019567_cryptocurrency-transparent-cryptocurrency-png-png-download.png',
      strong: 'Alex Johnson',
      p: 'Comented on my Channel Post: Awosome Post !!! Thanks'
    }
  ]
  constructor(private designUtilityService: DesignUtilityService) {}

  ngOnInit(): void {
    from(this.notifyData).pipe(
      // mergeMap(res=> this.getHtml(res)),
      concatMap(res=> this.getHtml(res))
      )
    .subscribe(res => {
      console.log(res);
      this.designUtilityService.print2(res, 'elContainer')
    });
  }
  getHtml(data: any) {
    return of(`<div class="item">
    <div class="header">
      <div class="app">
        <img src="${data.icon}" width="20">
        ${data.name}
      </div>
      <div class="time">${data.time}</div>
    </div>
    <div class="body">
      <img src="${data.img}" class="item-img" width="70px" height="40">
      <strong>${data.strong}</strong>
      <p>${data.p}</p>
    </div>
  </div>`).pipe(delay(2000))
  }

}
