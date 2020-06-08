import { Component, Inject, OnInit } from '@angular/core';
//import { CookieService } from 'ngx-cookie-service';
import { Location, DOCUMENT } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
//import { CommonService } from './common.service';
declare const jQuery: any;

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
title = 'Sample';
cookieValue = 'UNKNOWN';

isAuth = false;
returnUrl: string;
showComponent: boolean;
//private commonservice: CommonService
constructor(@Inject(DOCUMENT) private document: Document,
private location: Location, private router: Router, private route: ActivatedRoute
) {
}
ngOnInit() {
  
  }
}
