import type { Meta, StoryObj } from '@storybook/react'

import { TextInput } from './TextInput'

const meta = {
  title: 'TextInput',
  component: TextInput,
  tags: ['autodocs'],
} satisfies Meta<typeof TextInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter text here',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}