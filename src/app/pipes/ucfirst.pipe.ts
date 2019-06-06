import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'ucfirst'})
export class UpperCaseFirstPipe implements PipeTransform {
    transform(content) {
        return content ? content.charAt(0).toUpperCase() + content.slice(1) : '';
    }
}