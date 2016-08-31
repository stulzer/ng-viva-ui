import Floatl from 'floatl'
import labelModule from '../../label.module'
import template from './floatLabel.html'

class FloatLabelHandler {
  constructor ($attrs, $input, $label, $ctrl) {
    this.$attrs = $attrs
    this.$input = $input
    this.$label = $label
    this.$ctrl = $ctrl

    this.setLabelClass = this.setLabelClass.bind(this)
    this.setText = this.setText.bind(this)
  }

  setLabelClass (labelClass) {
    this.$ctrl.labelClass = labelClass
  }

  setText () {
    this.$label.text(this.$attrs.label || this.$input.attr('placeholder'))
  }
}

/**
 * @ngdoc directive
 * @name ngVivaUi.label.directive:vivaUiFloatLabel
 * @restrict E
 * @scope
 * @description UI Kit's float label implementation.
 * @example
    <example module="ngVivaUi.label">
      <file name="app.html">
        <div class="live-example">
          <viva-ui-float-label>
            <input type="text" viva-ui-input placeholder="Float label">
          </viva-ui-float-label>
        </div>

        <div class="live-example">
          <viva-ui-float-label label="I'm a label">
            <input type="text" viva-ui-input placeholder="I'm a placeholder">
          </viva-ui-float-label>
        </div>
      </file>

      <file name="style.css">
        .live-example {
          display: inline-block;
          width: 33%;
          vertical-align: top;
        }

        .live-example input[type="text"]:focus {
          box-shadow: none;
        }
      </file>
    </example>
 */
labelModule.directive('vivaUiFloatLabel', ['$compile', ($compile) => {
  return {
    template,
    restrict: 'E',
    scope: {},
    transclude: true,
    controllerAs: '$uiFloatLabel',
    controller: function () {},
    link: {
      post: ($scope, $element, $attrs, $ctrl) => {
        const $floatLabelContainer = $element.children()
        const $ngTrascludeTag = $element.find('ng-transclude')

        const $input = $element.find('input')
        const $label = $compile('<label class="floatl__label" ng-class="[$uiFloatLabel.labelClass]">')($scope)

        const handler = new FloatLabelHandler($attrs, $input, $label, $ctrl)

        $input.addClass('floatl__input')
        $floatLabelContainer[0].insertBefore($label[0], $ngTrascludeTag[0])

        $attrs.$observe('labelClass', handler.setLabelClass)
        $attrs.$observe('label', handler.setText)

        $scope.$watch(
          () => {
            return $input.attr('placeholder')
          },
          handler.setText
        )

        Floatl.call(Object.create(Floatl.prototype), $floatLabelContainer[0])
      }
    }
  }
}])
