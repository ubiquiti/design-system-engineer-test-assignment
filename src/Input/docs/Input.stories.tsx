import { Meta, StoryObj } from '@storybook/react'
import Input from '../Input'

export default {
  title: 'Input',
  component: Input,
  argTypes: {},
} as Meta

type Story = StoryObj<typeof Input>

export const BasicUsage: Story = {
  args: {
    placeholder: 'Hello World',
  },
}
