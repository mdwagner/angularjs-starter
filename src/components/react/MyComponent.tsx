import React from 'react';
import { css } from 'emotion';

export class MyComponent extends React.Component {
  render() {
    return (
      <div className={css`
        color: blue;
      `}>
        My React Component
      </div>
    );
  }
}
