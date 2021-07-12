import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicationFormaterService {

  constructor() { }

  isSharedContent(p) {
    return p.post_type == 'shared'
  }

  getReferencedField(p, field) {
    if(this.isSharedContent(p)) {
      switch(field) {
        case 'profile_name':
          let data;
          data = p.referenced_post.firstname + ' ';
          data += p.referenced_post.lastname;
          return data;

        case 'subtitle':
          return '@' + p.referenced_post.username;

        case 'group_name':
          return '@' + p.group_name;

        default:
          return p.referenced_post[field];
      }
    }

    return null;
  }

}
