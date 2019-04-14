import { css } from 'emotion';
import { components } from '../module';

const className = css`
  color: red;
`;

export const myComponent = {
  displayName: 'myComponent',
  template: `
    <div class="${className}">My Angularjs component</div>
  `
};

components.component(myComponent.displayName, myComponent);
