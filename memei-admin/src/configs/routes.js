import {pCategories, pAuthors, pCards, pPhotos} from '@/components/pages/'

export default [
  {
    path: '/',
    component: pCategories
  },
  {
    path: '/categories',
    component: pCategories
  },
  {
    path: '/authors',
    component: pAuthors
  },
  {
    path: '/cards',
    component: pCards
  },
  {
    path: '/photos',
    component: pPhotos
  }
]
