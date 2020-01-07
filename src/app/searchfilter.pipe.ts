import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(value, search): any {
    if (!search) //while not i search
      return value; // return or display all data 
    return value.filter(res => res.first_name.toLowerCase().startsWith(search.toLowerCase()))
  }

}
