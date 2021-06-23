import SpecCard from './specCard'
import React from 'react'

export default {
  title: 'MyComponents/Spec Card',
  component: SpecCard,
  args: {
    specialist: {
      id: '12345',
      email: 'algoritm211@gmail.com',
      name: 'Alex S',
      photo: null,
      type: 'Психолог',
      isLiked: true,
    },
  },
}

const Template = (args) => <SpecCard {...args} />

export const SpecialistCard = Template.bind({})
SpecialistCard.storyName = 'Spec. Card'
