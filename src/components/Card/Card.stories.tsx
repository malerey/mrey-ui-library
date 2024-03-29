import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './Card'

const meta = {
  title: 'Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy fox',
  },
}

export const WithHoverEffect: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy fox',
    hoverEffect: true,
  },
}
