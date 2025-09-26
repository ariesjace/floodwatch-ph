import { getNewsTopHeadlines } from '@/api'
import { removeDuplicateData } from '@/utils'
import Article from './Article'
import React from 'react'

const TopHeadlines = async () => {
  const newsTop = await getNewsTopHeadlines()
  const filterArticles = removeDuplicateData(newsTop)

  return (
    <div className='w-[700px]'>
        <Article />
    </div>
  )
}

export default TopHeadlines