import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    disabled: false,
    variant: 'primary',
    children: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    disabled: false,
    variant: 'secondary',
    children: 'Button',
  },
}

export const Outline: Story = {
  args: {
    disabled: false,
    variant: 'outline',
    children: 'Button',
  },
}

export const Ghost: Story = {
  args: {
    disabled: false,
    variant: 'ghost',
    children: 'Button',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Button',
  },
}
