import { Component, ViewChild, TemplateRef } from "@angular/core"

@Component({
  selector: 'tab-title',
  template: `    
      <ng-template #template>
          <ng-content></ng-content>
      </ng-template>
  `
})
export class TabTitleComponent {
  @ViewChild('template') template: TemplateRef<any>;
}