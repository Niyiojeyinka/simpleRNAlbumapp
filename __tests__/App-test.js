import * as React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';

import AppNavigatorWithStore from '../App';
//use app store

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('Test Screen rendered correctly', () => {
  test('first screen really rendered & contains the header', async () => {
    const component = <AppNavigatorWithStore />;

    const {findByText} = render(component);

    const header = await findByText('Home');

    expect(header).toBeTruthy();
  });

  test('filter division is present', async () => {
    const component = <AppNavigatorWithStore />;

    const {findByText} = render(component);

    const division = await findByText('FILTER');
    expect(division).toBeTruthy();
  });
  test('loading feedback is showing when album is yet to be loaded', async () => {
    const component = <AppNavigatorWithStore />;

    const {findByText} = render(component);

    const fetchingText = await findByText(/fetching/i);
    expect(fetchingText).toBeTruthy();
  });

  test('show albums list when it finished fetching', async () => {
    const component = <AppNavigatorWithStore />;

    const {getAllByA11yLabel} = render(component);
    const elements = await waitFor(() => getAllByA11yLabel('each-album'));

    expect(elements.length).toBeGreaterThan(0);
  });
  test('pressing on each album take user to album gallery', async () => {
    const component = <AppNavigatorWithStore />;

    const {getByA11yLabel} = render(component);
    const element = await waitFor(() => getByA11yLabel('each-album'));

    fireEvent(element, 'press');
    const newHeader = await findByText('album title');
    expect(newHeader).toBeTruthy();
  });
});
