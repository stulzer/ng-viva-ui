import { applyStyle } from '../../providers/uiStylist/uiStylist'
import mainModule from '../../main.module'
import style from './completometro.scss'
import template from './completometro.html'

class CompletometroHandler {
  constructor ($element, $ctrl) {
    this.$element = $element
    this.$ctrl = $ctrl
  }

  setProgress (progress) {
    this.$element.css('width', `${progress}px`)
  }
}

/**
 * @ngdoc directive
 * @name ngVivaUi.directive:vivaUiCompletometro
 * @restrict E
 * @description UI Kit's completômetro implementation.
 * @example
    <example module="ngVivaUi">
      <file name="app.html">
        <viva-ui-completometro progress="50"></viva-ui-completometro>
      </file>
    </example>
 */
mainModule.directive('vivaUiCompletometro', () => {
  applyStyle(style)

  return {
    template,
    restrict: 'E',
    scope: {
      progress: '='
    },
    bindToController: true,
    controllerAs: '$uiCompletometro',
    controller: function () {
      this.classPrefix = 'viva-ui-completometro'
    },
    link: ($scope, $element, $attrs, $ctrl) => {
      const handler = new CompletometroHandler($element, $ctrl)

      $scope.$watch(
        () => $ctrl.progress,
        (progress) => {
          progress = typeof progress === 'number' && !Number.isNaN(progress) ? progress : 0
          handler.setProgress(progress)
        }
      )
    }
  }
})
