import React from 'react';
import { render, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';

import AsyncTest from './AsyncTest';
import { URL } from './AsyncTest';

// test.skip('skip test', () => {});

jest.mock('axios');

const hits = [
  {
    objectID: '1',
    title: 'Angular',
  },
  {
    objectID: '2',
    title: 'React',
  },
];

describe('AsyncTest', () => {
  it('should fetch news from API and render news', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: { hits } }));
    const { getByRole, findAllByRole } = render(<AsyncTest />);

    userEvent.click(getByRole('button'));
    const items = await findAllByRole('listitem');

    expect(items).toHaveLength(2);
    expect(axios.get).toHaveBeenCalledWith(`${URL}?query=React`);
  });

  it('should fetch news from API, reject and show error message', async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error()));
    const { getByRole, findByText } = render(<AsyncTest />);

    userEvent.click(getByRole('button'));
    const errorMessage = await findByText(/Something went wrong .../i);

    expect(errorMessage).toBeInTheDocument();
  });

  it('should fetch news from API and render news with act', async () => {
    const promise = Promise.resolve({ data: { hits } });
    axios.get.mockImplementationOnce(() => promise);
    const { getByRole, getAllByRole } = render(<AsyncTest />);

    userEvent.click(getByRole('button'));
    await act(() => promise);

    expect(getAllByRole('listitem')).toHaveLength(2);
    expect(axios.get).toHaveBeenCalledWith(`${URL}?query=React`);
  });
});
