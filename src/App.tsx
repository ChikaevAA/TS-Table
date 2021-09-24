import React from 'react';
import { compose } from 'redux';
import Main from './pages/Main';
import { WithRedux } from './hoc/withRedux';

const App: React.FC = () => <Main />;

const withAppData = (Component: React.FC): React.FC => compose<React.FC>(WithRedux)(Component);

export default withAppData(App);
