import { Component } from '@angular/core';
import { Router,NavigationEnd ,Event } from '@angular/router';
import { LoggerService } from 'my-lib';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUrl:string="";
pageTitle:String = "Angular Product Management" 
public href: string = "";
constructor(private router : Router , logger:LoggerService) {
  logger.log('hello my first library');
}
  ngOnInit() {
    
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd ) {
        console.log(event);
        this.currentUrl = event.url;
      }
    });
  }
}
