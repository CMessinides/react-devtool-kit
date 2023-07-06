import React from 'react'
import { Button } from './Button'
import type { ButtonProps } from './Button'
import { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
}
export default meta

const Template: StoryFn<typeof Button> = (args: ButtonProps) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  children: 'Primary',
}
