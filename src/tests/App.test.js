import React from 'react';
import { screen } from '@testing-library/react';
import RenderWithRouter from '../testsHelpers/RenderWithRouter.js';
import SearchRepo from '../pages/SearchRepo.js';

const MESSAGE_FOR_TECHERS = 'Sorry Techers No Tests Today I Tried :(';

describe('example',() => {
  it('A Página Deve Conter Um Input Com O Placeholder Definido', async () => {
    RenderWithRouter(<SearchRepo />);

    const Input = await screen.findByPlaceholderText(/enter a github user/i);

    expect(Input).toBeInTheDocument();
  })
})

  // const imgToCompare = screen.getByAltText(/Logo Letters/i);
  // expect(imgToCompare).toBeDefined();
