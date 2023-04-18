import { Meta, StoryObj } from '@storybook/react'
import FormItem from '../FormItem'

export default {
  title: 'FormItem',
  component: FormItem,
  argTypes: {},
} as Meta

type Story = StoryObj<typeof FormItem>

export const BasicUsage: Story = {
  args: {
    label: 'Hello World',
  },
}
