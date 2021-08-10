import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalEventsService {

  private mainContainer: HTMLElement //Where all views are displayed.
  private currentUrl: string;
  private eventPool: EventPool = new EventPool();

  constructor(private router: Router) {
    this.mainContainer = document.getElementById('element-mat-drawer');
    
    //Set the current URL whenever it changes.
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects;
      }
    });
    
    //Event when the user reaches the bottom of the page.
    this.mainContainer.addEventListener('scroll', (e) => {
      let scrollLimit = this.mainContainer.scrollHeight - this.mainContainer.offsetHeight;
      let currentScrollPosition = this.mainContainer.scrollTop;

      if(currentScrollPosition >= scrollLimit) {
        let callbackList = this.eventPool.endOfPage;
        for(let cb of callbackList) {
          if(cb.urlWhereExecute == this.currentUrl) {
            console.log('Excecuting:', cb.id, 'from "EndOfPage" event');
            cb.callback(e);
          }
        }
      }
    });
  }

  onEndOfPage(id: string, url: string, callback: Function) {
    console.log('subscriber for End Of Page Event called');
    let callbackList = this.eventPool.endOfPage;
    for(let i = 0; i < callbackList.length; i++) {
      if(callbackList[i].id == id) {
        console.log('Callback found, replacing:', id);
        callbackList[i] = {
          id,
          urlWhereExecute: url,
          callback
        };
        return;
      }
    }
    console.log('Callback not found. Adding new:', id);
    callbackList.push({
      id,
      urlWhereExecute: url,
      callback
    });
  }
}

export class EventPool {
  endOfPage: CallbackMetadata[] = [];
}

export class CallbackMetadata {
  id: string;
  urlWhereExecute: string;
  callback: Function
}