import React from 'react';

/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

/* eslint-enable */
import { Button, Input } from '../src';


storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')} title="Hello Button" />)
  .add('with some emoji', () => <Button onClick={action('clicked')} title="😀 😎 👍 💯" />);


storiesOf('Input', module)
  .add('with event handlers', () => <Input onBlur={action('blur')} onChange={action('onChange')} />);
