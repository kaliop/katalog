// import { storiesOf } from '@storybook/html'
import Button from '@components/button/Button.html.twig'
import '@components/button/_button.scss'

const CustomclassesOptions = {
  'Btn--underline': 'Btn--underline',
  'Btn--inverted': 'Btn--inverted'
}

export default {
  component: Button,
  title: 'Button'
}

export const Default = () =>
  Button({
    label: 'Button'
  })

export const Inverted = () =>
  Button({
    customClasses: 'Btn--inverted',
    label: 'Button'
  })

export const Underline = () =>
  Button({
    customClasses: 'Btn--underline',
    label: 'Button'
  })
