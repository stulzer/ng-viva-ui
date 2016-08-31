import { applyStyle } from '../../providers/uiStylist/uiStylist'
import mainModule from '../../main.module'
import template from './checkbox.html'
import style from './checkbox.scss'
import '../icon/icon.directive'

class CheckboxHandler {
  constructor ($scope, $element, $attrs, $ngModel, $uiCheckbox) {
    this.$scope = $scope
    this.$element = $element
    this.$attrs = $attrs
    this.$ngModel = $ngModel
    this.$uiCheckbox = $uiCheckbox
  }

  onClick () {
    const element = this.$element[0]
    const isDisabled = element.disabled

    if (isDisabled) {
      return
    }

    const isChecked = element.checked
    const trueVal = this.$attrs.hasOwnProperty('ngTrueValue') ? this.$scope.$eval(this.$attrs.ngTrueValue) : true
    const falseVal = this.$attrs.hasOwnProperty('ngFalseValue') ? this.$scope.$eval(this.$attrs.ngFalseValue) : false

    const value = isChecked ? falseVal : trueVal
    this.$ngModel.$setViewValue(value)
    this.$ngModel.$render()
  }
}

/**
 * @ngdoc directive
 * @name ngVivaUi.directive:vivaUiCheckbox
 * @restrict A
 * @element input type="checkbox"
 * @description UI Kit's checkbox implementation.
 * @param {empty | enum:[minus]} vivaUiCheckbox Change checkbox's tick.
 */
mainModule.directive('vivaUiCheckbox', ['$compile', ($compile) => {
  applyStyle(style)

  return {
    restrict: 'A',
    require: 'ngModel',
    link: ($scope, $element, $attrs, $ngModel) => {
      const $innerScope = $scope.$new(true)

      const $uiCheckbox = $innerScope.$uiCheckbox = {}
      $uiCheckbox.classPrefix = 'viva-ui-checkbox'

      const $template = $compile(template)($innerScope)
      const handler = new CheckboxHandler($scope, $element, $attrs, $ngModel, $uiCheckbox)

      $element.after($template)

      $attrs.$observe('vivaUiCheckbox', (val) => {
        $uiCheckbox.hasMinusIcon = val === 'minus'
      })

      $template.bind('click', (e) => {
        handler.onClick()
        const ngClick = $attrs.ngClick

        if (ngClick) {
          $scope.$event = e
          $scope.$eval(ngClick)
          delete $scope.$event
        }
      })
    }
  }
}])
