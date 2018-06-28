import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsComponent } from "./components/tabs.component"
import { TabItemComponent } from "./components/tab-item.component"
import { TabTitleComponent } from "./components/tab-title.component"
import { TabContentComponent } from "./components/tab-content.component"

const TAB_COMPONENTS = [TabsComponent, TabItemComponent, TabTitleComponent, TabContentComponent];

@NgModule({
  imports: [ CommonModule ],
  declarations: TAB_COMPONENTS,
  exports: TAB_COMPONENTS
})
export class TabsModule { }
