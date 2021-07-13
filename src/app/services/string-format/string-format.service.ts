import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringFormatService {

  constructor() { }

  public splitByEOL(text): Array<string> {
    let splitedByLines = text.split('\n')
    for (let j = 0; j < splitedByLines.length; j++) {
      if(splitedByLines[j] == '') {
        splitedByLines.splice(j, 1);
        j -= 1;
      }
    }
    
    return splitedByLines;
  }
}
