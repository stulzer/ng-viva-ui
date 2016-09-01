import { applyStyle } from '../../providers/uiStylist/uiStylist'
import mainModule from '../../main.module'
import style from './completometro.scss'
import template from './completometro.html'

let styleApplied

class CompletometroHandler {
  constructor ($ctrl, $scope, $element, $progressCircle) {
    this.$ctrl = $ctrl
    this.$scope = $scope
    this.$element = $element
    this.$progressCircle = $progressCircle
  }

  setProgress (progress) {
    const deg = progress * 1.8 - 90
    // const translate = progress > 50 ? 25 : 0

    this.$progressCircle.css('width', `${progress}%`)
    this.$progressCircle.css('transform', `rotate(${deg}deg)`)
    // this.$progressCircle.css('top', top)
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
        <viva-ui-completometro progress="0"></viva-ui-completometro>
        <viva-ui-completometro progress="15"></viva-ui-completometro>
        <viva-ui-completometro progress="25"></viva-ui-completometro>
        <viva-ui-completometro progress="50"></viva-ui-completometro>
        <viva-ui-completometro progress="75"></viva-ui-completometro>
        <viva-ui-completometro progress="95"></viva-ui-completometro>
        <viva-ui-completometro progress="100"></viva-ui-completometro>
      </file>
    </example>
 */
mainModule.component('vivaUiCompletometro', {
  template,
  bindings: {
    progress: '='
  },
  controllerAs: '$uiCompletometro',
  controller: ['$scope', '$element', function ($scope, $element) {
    const handler = new CompletometroHandler(this, $scope, $element)

    if (!styleApplied) {
      styleApplied = !!applyStyle(style)
    }

    this.$onChanges = (changesObj) => {
      const progress = changesObj.progress

      if (progress) {
        handler.setProgress(progress)
      }
    }

    this.$postLink = () => {
      handler.$progressCircle = angular.element(
        $element[0].querySelector('.viva-ui-completometro__arch-progress')
      )

      handler.setProgress(this.progress)
    }
  }]
})
