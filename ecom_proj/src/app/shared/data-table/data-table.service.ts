import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  constructor() { }

  removeDuplicates(arr, prop) {
    return arr.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }

  tableSort(event: any) {
    event.data.sort((data, dataNext) => {

      let value = data[event.field];
      let valueNext = dataNext[event.field];
      let result = null;

      if (value == null && valueNext != null) {
        result = -1;
      }
      else if (value != null && valueNext == null) {
        result = 1;
      }
      else if (value == null && valueNext == null) {
        result = 0;
      }
      else if (event.field === "statusDate") {
        let date = new Date(value);
        let dateNext = new Date(valueNext);
        if (!isNaN(date.getTime()) && !isNaN(dateNext.getTime())) {
          result = (date.getTime() > dateNext.getTime()) ? 1 : -1;
        }
      }
      else if (typeof value === 'string' && typeof valueNext === 'string') {

        result = value.localeCompare(valueNext);
      }
      else {
        result = (value < valueNext) ? -1 : (value > valueNext) ? 1 : 0;
      }

      return (event.order * result);
    });
  }
}
