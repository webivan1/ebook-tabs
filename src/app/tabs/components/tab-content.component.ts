import {
  Component,
  TemplateRef,
  ContentChild,
  ViewChild
} from "@angular/core"

@Component({
  selector: 'tab-content',
  template: `    
      <ng-template #template>
          <ng-content></ng-content>
      </ng-template>
  `
})
export class TabContentComponent {
  @ViewChild('template') template: TemplateRef<any>;
  @ContentChild(TemplateRef) templateRef: TemplateRef<any>;
}