import { components } from '../module';

export const myComponent = {
  displayName: 'myComponent',
  template: `
    <div>My Angularjs component</div>
  `
};

components.component(myComponent.displayName, myComponent);
