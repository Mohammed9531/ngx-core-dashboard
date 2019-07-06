import { Component, Input } from '@angular/core';

/**
 * @author: Shoukath Mohammed
 */
@Component({
  selector: 'bri-sidebar',
  templateUrl: './bri-sidebar.component.html',
  styleUrls: ['./bri-sidebar.component.scss']
})
export class BriSidebarComponent {
  /**
   * @public
   * @type: boolean
   * @description: flag to toggle the sidebar.
   */
  @Input()
  public toggled: boolean;

  /**
   * @public
   * @type: boolean
   * @description: flag to determine the sidebar
   * collapsed state.
   */
  @Input()
  public collapsed: boolean;
}
