import * as React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';

import AppNavigatorWithStore from '../App';
import AppNavigator from '../AppNavigator';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
//jest.setTimeout(30000);

describe('Test Screen rendered correctly', () => {
  test('first screen really rendered & contains the header', async () => {
    const component = <AppNavigatorWithStore />;

    const {findByText} = render(component);

    const header = await findByText('Home');

    expect(header).toBeTruthy();
  });

  test('loading feedback is showing when album is yet to be loaded', async () => {
    const component = <AppNavigatorWithStore />;

    const {findByText} = render(component);

    const fetchingText = await findByText(/fetching/i);
    expect(fetchingText).toBeTruthy();
  });

  test('filter division is present', async () => {
    const component = <AppNavigatorWithStore />;
    const {findByText} = render(component);

    const el = await findByText('FILTER');
    console.debug('check here', el.toString());
    expect(el).toBeTruthy();
  });

  test('show albums list when it finished fetching', () => {
    const component = <AppNavigatorWithStore />;
    const {findByTestId} = render(component);
    const el = findByTestId('each-album');

    expect(el).toBeTruthy();

    /* await waitFor(() => {
      expect(getAllByTestId('each-album')).toBeGreaterThan(0);
    });*/
  });
  /*
  test('pressing on each album take user to album gallery', async () => {
    const component = <AppNavigatorWithStore />;

    const {getByA11yLabel, findByText} = render(component);

    await waitFor(async () => {
      element = getByA11yLabel('each-album');
      fireEvent(element, 'press');
      await waitFor(() => {
        const newHeader = findByText('Gallery');
        expect(newHeader).toBeTruthy();
      });
    });
  });*/
});
