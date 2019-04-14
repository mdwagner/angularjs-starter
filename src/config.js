import angular from 'angular';

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
        <div>Main</div>
      `
    }
  ];

  routeConfig.forEach((c) => $stateProvider.state(c));
}
