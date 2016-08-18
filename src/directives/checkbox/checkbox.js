import { applyStyle } from '../../providers/uiStylist/uiStylist'
import uiModule from '../../providers/uiModule/uiModule'
import template from './checkbox.html'
import style from './checkbox.scss'
import '../icon/icon'

class CheckboxHandler {
  constructor ($element, $uiCheckbox) {
    this.$element = $element
    this.$uiCheckbox = $uiCheckbox
  }

  setIcon () {
    const element = this.$element[0]
    const isDisabled = element.disabled
    const isChecked = element.checked

    let icon = 'checkbox'
    icon += isChecked ? 'On' : 'Off'

    if (isDisabled) {
      icon += 'Disabled'
    }

    this.$uiCheckbox.icon = icon
  }
}

/**
 * @ngdoc directive
 * @name ng-viva-ui.directive:vivaUiCheckbox
 * @restrict A
 * @element input type="checkbox"
 * @description UI Kit's checkbox implementation.
 * @param {empty | enum:[minus]} vivaUiCheckbox Change checkbox's tick.
 */
uiModule.directive('vivaUiCheckbox', ['$compile', ($compile) => {
  applyStyle(style)

  return {
    restrict: 'A',
    require: 'ngModel',
    link: ($scope, $element, $attrs, $ngModel) => {
      const $innerScope = $scope.$new(true)

      const $uiCheckbox = $innerScope.$uiCheckbox = {}
      $uiCheckbox.classPrefix = 'viva-ui-checkbox'

      const $template = $compile(template)($innerScope)
      const handler = new CheckboxHandler($element, $uiCheckbox)

      $element.after($template)

      $attrs.$observe('vivaUICheckbox', (val) => {
        $uiCheckbox.hasMinusIcon = val === 'minus'
      })

      $scope.$watch(
        () => {
          const element = $element[0]
          const { disabled, checked } = element
          return { disabled, checked }
        },
        (val) => {
          handler.setIcon()
        },
        true
      )

      $template.bind('click', () => {
        const element = $element[0]
        const isDisabled = element.disabled

        if (isDisabled) {
          return
        }

        const isChecked = element.checked
        const trueVal = $attrs.hasOwnProperty('ngTrueValue') ? $scope.$eval($attrs.ngTrueValue) : true
        const falseVal = $attrs.hasOwnProperty('ngFalseValue') ? $scope.$eval($attrs.ngFalseValue) : false

        $ngModel.$setViewValue(isChecked ? falseVal : trueVal)
        $ngModel.$render()

        $scope.$applyAsync(() => {
          handler.setIcon()
        })
      })
    }
  }
}])
