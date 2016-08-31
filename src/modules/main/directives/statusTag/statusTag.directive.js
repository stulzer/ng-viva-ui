import { applyStyle } from '../../providers/uiStylist/uiStylist'
import mainModule from '../../main.module'
import style from './statusTag.scss'

/**
 * @ngdoc directive
 * @name ngVivaUi.directive:vivaUiStatusTag
 * @restrict E
 * @description UI Kit's status tag implementation.
 * @param {string} [status] Tag status.
 * @example
    <example module="ngVivaUi">
      <file name="index.html">
        <style>
          .live-example {
            margin-right: 5px;
          }
        </style>

        <viva-ui-status-tag class="live-example">Default</viva-ui-status-tag>
        <viva-ui-status-tag status="success" class="live-example">Success</viva-ui-status-tag>
      </file>
    </example>
 */
mainModule.directive('vivaUiStatusTag', () => {
  applyStyle(style)

  return {
    restrict: 'E'
  }
})
