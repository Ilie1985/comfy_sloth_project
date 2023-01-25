import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'





export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]


export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'We are proud to say that close to 60% of our business comes from personal recommendations and repeat customers. We have always had a unwavering commitment to personal service.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'Where possible we use sustainably resourced timber and we recycle our waste materials in a responsible manner. We are committed to being environmentally friendly wherever we can.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'We remain one of the most valued provider in leading fitted furniture manufacturer and are also one of the earliest innovators of fitted home office furniture. Our designs incorporate innovative space saving concepts wherever possible.',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
