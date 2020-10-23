import { storiesOf } from '@storybook/html'
import Button from '@components/button/Button.html.twig'
import '@components/button/_button.scss'

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