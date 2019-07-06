import { Component, Output, EventEmitter } from '@angular/core';

/**
 * @author: Shoukath Mohammed
 */
@Component({
  selector: 'bri-navbar',
  templateUrl: './bri-navbar.component.html',
  styleUrls: ['./bri-navbar.component.scss']
})
export class BriNavbarComponent {
  /**
   * @public
   * @type: boolean
   * @description: flag to toggle the navbar
   */
  public isToggled: boolean = false;

  /**
   * @public
   * @type: boolean
   * @description: flag to toggle the dashboard
   * theme
   */
  public isDarkTheme: boolean = true;

  /**
   * @public
   * @type: boolean
   * @description: flag to animate the navbar
   */
  public isCollapsing: boolean = false;

  /**
   * @public
   * @output
   * @type: boolean
   * @description: an event emitter to switch
   * the dashboard theme.
   */
  @Output()
  public theme: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * @constructor
   */
  constructor() { }

  /**
   * @public
   * @param: {e<MouseEvent>}
   * @returns: void
   * @description: a helper method that toggles
   * the navbar view.
   */
  public onToggle(e: MouseEvent): void {
    this.isCollapsing = true;

    setTimeout(() => {
      this.isCollapsing = false;
      this.isToggled = !this.isToggled;
    });
  }

  /**
   * @public
   * @param: {e<MouseEvent>}
   * @returns: void
   * @description: a helper method that toggles
   * the dashboard theme.
   */
  public onThemeToggle(e: MouseEvent): void {
    this.isDarkTheme = !this.isDarkTheme;
    this.theme.emit(this.isDarkTheme);
  }
}
