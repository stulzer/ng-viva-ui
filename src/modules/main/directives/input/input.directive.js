import { applyStyle } from '../../providers/uiStylist/uiStylist'
import mainModule from '../../main.module'
import style from './input.scss'

/**
 * @ngdoc directive
 * @name ngVivaUi.directive:vivaUiInput
 * @restrict A
 * @element input
 * @param {enum:[text]} type HTML's input type.
 * @description UI Kit's input implementation.
 * @example
    <example module="ngVivaUi">
      <file name="app.html">
        <div class="live-example">
          <input type="text" viva-ui-input placeholder="Input text">
        </div>

        <div class="live-example">
          <input type="text" viva-ui-input="error" placeholder="Input text with error">
          <span viva-ui-input-status>Error message</span>
        </div>
      </file>

      <file name="style.css">
        .live-example {
          display: inline-block;
          width: 33%;
          vertical-align: top;
        }

        .live-example > * {
          display: block;
        }

        .live-example > span {
          margin-top: 4px;
        }

        .live-example input[type="text"]:focus {
          box-shadow: none;
        }
      </file>
    </example>
 */
mainModule.directive('vivaUiInput', () => {
  applyStyle(style)

  return {
    restrict: 'A'
  }
})
