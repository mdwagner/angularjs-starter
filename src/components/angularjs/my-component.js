import { css } from 'emotion';
import { components } from '../module';
import template from './my-component.template.html';

/**
 * @typedef ImsComponent
 * @type {import('angular').IComponentOptions & ImsComponentName}
 */

/**
 * @typedef ImsComponentName
 * @property {string} displayName
 */

/** @type {string} */
const className = css`
  color: red;
`;

/** @type {ImsComponent} */
export const myComponent = {
  displayName: 'myComponent',
  template,
  controller: [
    '$scope',
    (/** @type {import('angular').IScope} */ $scope) => {
      $scope.className = className;
    }
  ]
};

components.component(myComponent.displayName, myComponent);
