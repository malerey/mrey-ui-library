import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    variant: { control: 'string' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    disabled: false,
    variant: 'primary',
    size: 'default',
    children: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    disabled: false,
    variant: 'secondary',
    size: 'default',
    children: 'Button',
  },
}

export const Outline: Story = {
  args: {
    disabled: false,
    variant: 'outline',
    size: 'default',
    children: 'Button',
  },
}

export const Ghost: Story = {
  args: {
    disabled: false,
    variant: 'ghost',
    size: 'default',
    children: 'Button',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    size: 'default',
    children: 'Button',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Button',
  },
}
