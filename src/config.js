import { myComponent } from './components/angularjs/my-component';
import { MyComponent } from './components/react/MyComponent';

Config.$inject = [
  '$stateProvider',
  '$locationProvider'
];

export function Config(
  $stateProvider,
  $locationProvider
) {
  $locationProvider.html5Mode(true);

  const routeConfig = [
    {
      name: 'main',
      url: '/',
      template: `
        <div>
          <a ui-sref="main.index">Index</a>
          <a ui-sref="main.react">React</a>

          <ui-view></ui-view>
        </div>
      `,
      redirectTo: 'main.index'
    },
    {
      name: 'main.index',
      url: '',
      component: myComponent.displayName
    },
    {
      name: 'main.react',
      url: 'react',
      component: MyComponent
    },
  ];

  routeConfig.forEach((c) => $stateProvider.state(c));
}
