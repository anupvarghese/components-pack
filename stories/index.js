import React from 'react';

/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

/* eslint-enable */
import Button from '../src/index';


storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')} title="Hello Button" />)
  .add('with some emoji', () => <Button onClick={action('clicked')} title="😀 😎 👍 💯" />);
