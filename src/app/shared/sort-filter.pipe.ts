import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortFilter'
})
export class SortFilterPipe implements PipeTransform {

  transform(
    arr:any[], sortParam: string, filterParam: string
    ) {
    if (sortParam === undefined && filterParam === ''){
      return arr;
    }
    if ( sortParam !== undefined){
      switch(sortParam){
        case "id2":
          arr = arr.sort((function (a, b) {
            if ( a.id > b.id){
              return -1;
            }else if(a.id < b.id){
              return 1;
            }else return 0;
          }))
          break;
        case "id1":
          arr = arr.sort((function (a, b) {
            if ( a.id < b.id){
              return -1;
            }else if(a.id > b.id){
              return 1;
            }else return 0;
          }))
          break;
        case "price1": 
          arr = arr.sort((function (a, b) {
            if ( Number(a.price) > Number(b.id)){
              return -1;
            }else if(Number(a.price) < Number(b.id)){
              return 1;
            }else return 0;
          }))
          break;
        case "price2":
          arr = arr.sort((function (a, b) {
            if ( Number(a.price) < Number(b.price)){
              return -1;
            }else if(Number(a.price) > Number(b.price)){
              return 1;
            }else return 0;
          }))
          break;
      }
    }

    if (filterParam !== ''){
      let filter = arr.filter(
        ell => ell.name.toLowerCase().indexOf(filterParam.toLowerCase()) === 0);
      return filter;
    }
    return arr;
  }

}
