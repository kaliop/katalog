import { storiesOf } from '@storybook/html'
import { withKnobs, text, optionsKnob } from '@storybook/addon-knobs'
import Button from '@components/button/Button.html.twig'
import '@components/button/_button.scss'

const CustomclassesOptions = {
  'Btn--underline': 'Btn--underline',
  'Btn--inverted': 'Btn--inverted'
}

const stories = storiesOf('Button', module)
stories.addDecorator(withKnobs)
stories.add('Default', () =>
  Button({
    customClasses: { default: optionsKnob('CSS Modifiers', CustomclassesOptions, '', { display: 'multi-select' }), },
    label: text('label', 'Hello from twig !'),
  })
)
stories.add('Inverted', () =>
  Button({
    classes: 'Btn Btn--inverted',
    customClasses: { default: optionsKnob('CSS Modifiers', CustomclassesOptions, '', { display: 'multi-select' }), },
    label: text('label', 'Hello from twig !')
  })
)