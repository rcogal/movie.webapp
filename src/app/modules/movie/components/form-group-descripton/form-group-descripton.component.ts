import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-group-descripton',
  templateUrl: './form-group-descripton.component.html',
})
export class FormGroupDescriptonComponent {

  @Input()
  public label: string;

  @Input()
  public description: string;

}
