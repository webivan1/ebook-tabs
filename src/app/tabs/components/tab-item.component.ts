import {
  Component,
  ContentChild,
  Input,
  AfterContentInit
} from "@angular/core"
import { TabService } from "../services/tab.service"
import { TabTitleComponent } from "./tab-title.component"
import { TabContentComponent } from "./tab-content.component"

@Component({
  selector: 'tab',
  template: ``
})
export class TabItemComponent {

  @Input() public active: boolean = false;

  @ContentChild(TabTitleComponent) private tabTitle: TabTitleComponent;
  @ContentChild(TabContentComponent) private tabContent: TabContentComponent;

  constructor(public service: TabService) {  }

  setActive(): void {
    this.active = true;
  }

  setDisactive(): void {
    this.active = false;
  }
}