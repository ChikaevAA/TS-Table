/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { Provider } from 'react-redux';

import store from '../store';

export const WithRedux =
  <Props,>(Component: React.FC<Props>) =>
  (props: Props) =>
    (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    );
