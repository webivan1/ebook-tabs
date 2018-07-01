import {
  Component,
  ContentChild,
  Input
} from "@angular/core"
import { TabTitleComponent } from "./tab-title.component"
import { TabContentComponent } from "./tab-content.component"

@Component({
  selector: 'tab',
  template: ``
})
export class TabItemComponent {

  @Input() public active: boolean = false;

  @ContentChild(TabTitleComponent) public tabTitle: TabTitleComponent;
  @ContentChild(TabContentComponent) public tabContent: TabContentComponent;

  setActive(): void {
    this.active = true;
  }

  setDisactive(): void {
    this.active = false;
  }
}