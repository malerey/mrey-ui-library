import type { Meta, StoryObj } from '@storybook/react'

import Text from './Text'

const meta = {
  title: 'Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'string' },
  },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const headingLG: Story = {
  args: {
    variant: 'headingLG',
    children: 'The quick brown fox jumps over the lazy dog',
  },
}

export const headingMD: Story = {
  args: {
    variant: 'headingMD',
    children: 'The quick brown fox jumps over the lazy dog',
  },
}

export const headingSM: Story = {
  args: {
    variant: 'headingSM',
    children: 'The quick brown fox jumps over the lazy dog',
  },
}

export const paragraphLG: Story = {
  args: {
    variant: 'paragraphLG',
    children: 'The quick brown fox jumps over the lazy dog',
  },
}

export const paragraphMD: Story = {
  args: {
    variant: 'paragraphMD',
    children: 'The quick brown fox jumps over the lazy dog',
  },
}

export const paragraphSM: Story = {
  args: {
    variant: 'paragraphSM',
    children: 'The quick brown fox jumps over the lazy dog',
  },
}
export const caption: Story = {
  args: {
    variant: 'caption',
    children: 'The quick brown fox jumps over the lazy dog',
  },
}
