import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, maxcharacters: number=100): string {
    return `${value.slice(0, maxcharacters)}...`;
  }

}
