import {Component, Input, OnInit, AfterViewInit, AfterContentChecked, AfterViewChecked, ElementRef} from '@angular/core';
import * as $ from 'jquery';
import 'fullcalendar';
import 'fullcalendar-scheduler';
import { OptionsInput } from 'fullcalendar';

/*
  Generated class for the Calendar component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  template: '<div></div>',
  selector: 'angular2-fullcalendar'
})
export class CalendarComponent implements OnInit,AfterViewInit,AfterContentChecked,AfterViewChecked{

  @Input() options:OptionsInput;
  text: string;
  calendarInitiated:boolean;

  constructor(
    private element:ElementRef
  ) {
  }

  ngOnInit():void {
    console.log("ngOnInit");
  }

  ngAfterViewInit(){
    setTimeout(()=>{
      // console.log("100ms after ngAfterViewInit ");
      $('angular2-fullcalendar').fullCalendar(this.options);
    }, 100)
  }
  ngAfterContentChecked(){
  }
  ngAfterViewChecked(){
  }

  public updateEvent(event) {
    return $(this.element.nativeElement).fullCalendar('updateEvent', event);
  }

  public clientEvents(idOrFilter) {
    return $(this.element.nativeElement).fullCalendar('clientEvents', idOrFilter);
  }
  
  public fullcalendar(cmd, data, extra?) {
    $(this.element.nativeElement).fullCalendar(cmd, data, extra);
  }
}
