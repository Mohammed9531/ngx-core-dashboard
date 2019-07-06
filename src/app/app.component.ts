import { Component } from '@angular/core';

/**
 * @author: Shoukath Mohammed
 */
@Component({
  selector: 'bri-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * @public
   * @type: boolean
   * @description: flag to toggle the dashboard
   * theme.
   */
  public isDarkTheme: boolean = true;

  /**
   * @public
   * @param: {e<boolean>}
   * @returns: void
   * @description: a helper method that toggles
   * the dashboard theme.
   */
  public onThemeToggle(e: boolean): void {
    this.isDarkTheme = e;
  }
}
