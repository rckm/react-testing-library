import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test.skip('skip test', () => {});

// test('renders learn react link', () => {
//   // render(<App />);
//   // const linkElement = screen.getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();
//   // const { asFragment } = render(<App />);
//   // expect(asFragment(<App />)).toMatchSnapshot();
// });

// describe('App', () => {
// it('should render the App component', async () => {
//   render(<App />);
//   await screen.findByText(/Logged in as/i);
//   expect(screen.queryByText(/Searches for React/i)).toBeNull();
//   // fireEvent.change(screen.getByRole('textbox'), {
//   //   target: { value: 'React' },
//   // });
//   userEvent.type(screen.getByRole('textbox'), 'React');
//   expect(screen.getByText(/Searches for React/i)).toBeInTheDocument();
//   expect(screen.queryByText(/Searches for React/i)).toBeInTheDocument();
//   expect(screen.getByAltText('search')).toHaveClass('img');
//   expect(screen.getByLabelText(/search/i)).toBeRequired();
//   expect(screen.queryByText(/Logged in as/i)).toBeNull();
//   screen.debug();
//   expect(await screen.findByText(/Logged in as/i)).toBeInTheDocument();
//   screen.debug();
//   expect(screen.getByRole('textbox')).toBeInTheDocument();
//   expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
//   expect(screen.getByPlaceholderText('search text...')).toBeInTheDocument();
//   expect(screen.getByAltText('search')).toBeInTheDocument();
//   expect(screen.getByDisplayValue('')).toBeInTheDocument();
// });
// });

// describe('Checkbox', () => {
//   it('should click on the checkbox', () => {
//     const handleChange = jest.fn();
//     const { container } = render(
//       <input type="checkbox" onChange={handleChange} />
//     );
//     const checkbox = container.firstChild;
//     expect(checkbox).not.toBeChecked();
//     // fireEvent.click(checkbox);
//     userEvent.click(checkbox);
//     expect(handleChange).toHaveBeenCalledTimes(1);
//     expect(checkbox).toBeChecked();
//   });

//   it('should double click on the checkbox', () => {
//     const handleChange = jest.fn();
//     const { container } = render(
//       <input type="checkbox" onChange={handleChange} />
//     );
//     const checkbox = container.firstChild;
//     expect(checkbox).not.toBeChecked();
//     // fireEvent.click(checkbox);
//     userEvent.dblClick(checkbox);
//     expect(handleChange).toHaveBeenCalledTimes(2);
//     // expect(checkbox).toBeChecked();
//   });

//   it('should focus on the checkbox fireEvent', () => {
//     const { getByTestId } = render(
//       <input type="text" data-testid="simple-input" />
//     );
//     const input = getByTestId('simple-input');
//     expect(input).not.toHaveFocus();
//     input.focus();
//     expect(input).toHaveFocus();
//   });

//   it('should focus on the checkbox userEvent', () => {
//   const { getAllByTestId } = render(
//     <div>
//       <input data-testid="element" type="checkbox" />
//       <input data-testid="element" type="radio" />
//       <input data-testid="element" type="number" />
//     </div>
//   );
//   const [checkbox, radio, number] = getAllByTestId('element');
//   userEvent.tab();
//   expect(checkbox).toHaveFocus();
//   userEvent.tab();
//   expect(radio).toHaveFocus();
//   userEvent.tab();
//   expect(number).toHaveFocus();
//   const { getByTestId } = render(
//     <input type="text" data-testid="simple-input" />
//   );
//   const input = getByTestId('simple-input');
//   expect(input).not.toHaveFocus();
//   input.focus();
//   expect(input).toHaveFocus();
//   });

//   it('should select options', () => {
//     const { selectOptions, getByRole, getByText } = render(
//       <select>
//         <option value="1">A</option>
//         <option value="2">B</option>
//         <option value="3">C</option>
//       </select>
//     );
//     userEvent.selectOptions(getByRole('combobox'), '1');
//     expect(getByText('A').selected).toBeTruthy();
//     userEvent.selectOptions(getByRole('combobox'), '2');
//     expect(getByText('B').selected).toBeTruthy();
//     userEvent.selectOptions(getByRole('combobox'), '3');
//     expect(getByText('C').selected).toBeTruthy();
//     expect(getByText('A').selected).toBeFalsy();
//   });
// })
