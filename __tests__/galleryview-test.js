import * as React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import AppNavigator from '../AppNavigator';
//use hardcoded store
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from '../reducers';
import {addalbum} from '../actions/storealbum';
import {albumsTestData, userTestData} from '../helpers/testdata';
import {addusers} from '../actions/storeusers';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('Test Screen rendered correctly', () => {
  test('album gallery view actually show the clicked album details', async () => {
    const store = createStore(allReducers);

    store.dispatch(addalbum(albumsTestData));
    store.dispatch(addusers(userTestData));
    const component = (
      <Provider store={store}>
        <AppNavigator env="test" />
      </Provider>
    );
    const {getByA11yLabel} = render(component);
    const element = await waitFor(() => getByA11yLabel('each-album'));

    fireEvent(element, 'press');
    const title = await findByText('quidem molestiae enim');
    expect(title).toBeTruthy();
  });
});
