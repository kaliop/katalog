import { storiesOf } from '@storybook/html';
import Button from './Button.html.twig';
import '../../../components/button/_button.scss';

storiesOf('Button', module)
.add('Default', () =>
  Button({
    classes: 'Btn'
  })
).add('Inverted', () =>
  Button({
    classes: 'Btn Btn--inverted'
  })
)