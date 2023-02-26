import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss']
})
export class ExhaustMapComponent implements OnInit, AfterViewInit {

  baseUrl = 'https://global-1bb0f.firebase.com/exhaustMap.json';

  constructor(private http: HttpClient, private designUtilityService: DesignUtilityService) {}

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

}
