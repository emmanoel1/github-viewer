import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import ReposProvider from '../context/ReposProvider';

const RenderWithRouter = (
  component,
  {
    path = '/',
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
) => ({
  ...render(
    <ReposProvider>
      <Router history={ history }>
        <Route path={ path } render={ () => component } />
      </Router>
    </ReposProvider>,
  ),
  history,
});

export default RenderWithRouter;