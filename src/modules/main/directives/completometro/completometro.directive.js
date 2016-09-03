import { applyStyle } from '../../providers/uiStylist/uiStylist'
import color from 'color'
import mainModule from '../../main.module'
import style from './completometro.scss'
import template from './completometro.html'

let styleApplied

class CompletometroHandler {
  static stages = [
    { maxPercent: 49, text: 'Incompleto', color: '#e94b46' },
    { maxPercent: 69, text: 'Falta informação', color: '#ff6d00' },
    { maxPercent: 89, text: 'Pode melhorar', color: '#ffaf27' },
    { maxPercent: 99, text: 'Quase completo', color: '#ffcd20' },
    { maxPercent: 100, text: 'Completo', color: '#27cd6b' }
  ]

  constructor ($ctrl, $scope, $element, $progressCircle) {
    this.$ctrl = $ctrl
    this.$scope = $scope
    this.$element = $element
    this.$progressCircle = $progressCircle
  }

  setProgress (progress) {
    const stages = CompletometroHandler.stages

    for (let i = 0; i < stages.length; i++) {
      const deg = progress * 1.8
      const stage = stages[i]
      const next = stages[i + 1]
      let bgColor

      if (next && progress > stage.maxPercent) {
        continue
      }

      bgColor = next ? color(next.color).mix(color(stage.color), progress / 100).hexString() : stage.color

      setTimeout(() => {
        this.$progressCircle.css({
          'background-color': bgColor,
          'transform': `rotate(${deg}deg)`
        })

        this.$pointer.css('transform', `rotate(${deg - 90}deg)`)
      })

      break
    }
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
        <viva-ui-completometro progress="25"></viva-ui-completometro>
        <viva-ui-completometro progress="50"></viva-ui-completometro>
        <viva-ui-completometro progress="75"></viva-ui-completometro>
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
      applyStyle(style)
      styleApplied = true
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

      handler.$pointer = angular.element(
        $element[0].querySelector('.viva-ui-completometro__pointer')
      )

      handler.setProgress(this.progress)
    }
  }]
})
