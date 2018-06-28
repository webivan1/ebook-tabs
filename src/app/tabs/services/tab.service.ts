import { Injectable } from "@angular/core"

@Injectable()
export class TabService {

  public tabs: number[] = [];
  public activeTab: number = 0;

  private static generateKeyTab(): number {
    return Math.round(Math.random() * 2000);
  }

  public addTab(): number {
    let id = TabService.generateKeyTab();
    if (this.tabs.indexOf(id) === -1) {
      this.tabs.push(id);
      return id;
    } else {
      return this.addTab();
    }
  }

}