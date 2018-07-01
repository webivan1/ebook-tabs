import { Component, ContentChildren, QueryList } from "@angular/core"
import { TabItemComponent } from "./tab-item.component"

@Component({
  selector: 'tabs',
  template: `
    <div class="tabs__titles">
        <div 
            class="tabs__title" 
            *ngFor="let tab of tabs" 
            [ngClass]="{ 'tabs__title--active': tab.active }"
            (click)="active(tab)"
        >
            <ng-template [ngTemplateOutlet]="tab.tabTitle.template"></ng-template>
        </div>

        <div *ngFor="let tab of tabs">
            <div *ngIf="tab.active">
                <ng-template [ngTemplateOutlet]="tab.tabContent.template"></ng-template>
                <!-- init component -->
                <ng-template [ngTemplateOutlet]="tab.tabContent.templateRef"></ng-template>
            </div>
        </div>
    </div>
  `
})
export class TabsComponent {

  private tabs: QueryList<TabItemComponent>;

  @ContentChildren(TabItemComponent) set tabItems(items: QueryList<TabItemComponent>) {
    this.tabs = items;
    this.handleTabs(this.tabs);

    this.tabs.changes
      .subscribe((value: QueryList<TabItemComponent>) => this.handleTabs(value));
  }

  handleTabs(value: QueryList<TabItemComponent>) {
    let filterActiveTabs = value.filter((tab: TabItemComponent) => tab.active);

    if (filterActiveTabs.length === 0 && value.length > 0) {
      this.active(value.first);
    }
  }

  active(tab: TabItemComponent) {
    // remove active
    this.tabs.toArray().forEach((tab: TabItemComponent) => tab.setDisactive());

    // active tab
    tab.setActive();
  }
}