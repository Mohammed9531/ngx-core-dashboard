import { Component } from '@angular/core';

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
   * @description: flag to animate the navbar
   */
  public isCollapsing: boolean = false;

  /**
   * @constructor
   */
  constructor() { }

  /**
   * @public
   * @param: {e<MouseEvent>}
   * @returns: void
   * @description: a helper method that toggles
   * tbe navbar view.
   */
  public onToggle(e: MouseEvent): void {
    this.isCollapsing = true;

    setTimeout(() => {
      this.isCollapsing = false;
      this.isToggled = !this.isToggled;
    });
  }
}
