import {
  TOUCH_SCREEN,
  TOUCH_TWITTER,
  touchScreen,
  touchTwitter,
} from '../../actions/input';

test('touchScreen creates TOUCH_SCREEN action', () => {
  expect(touchScreen()).toMatchObject({
    type: TOUCH_SCREEN,
  });
});

test('touchTwitter creates TOUCH_TWITTER action', () => {
  expect(touchTwitter()).toMatchObject({
    type: TOUCH_TWITTER,
  });
});
