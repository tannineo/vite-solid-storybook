import { Story, Meta } from '@storybook/html'
import { Button } from './Button'

export default {
  title: 'Example/Button',
  argTypes: {
    count: { control: 'number' },
  },
} as Meta

const Template = ((args: Button.Props) => (
  <Button {...args} />
)) as Story<Button.Props>

export const OneButton = Template.bind({})
OneButton.args = { count: 1 }

export const TwoButtons = Template.bind({})
TwoButtons.args = { count: 2 }

export const ThreeButtons = Template.bind({})
ThreeButtons.args = { count: 3 }
