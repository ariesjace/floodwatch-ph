import { news } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import Tag from './Tag'

const Article = ({ data }: { data: news }) => {
  return (
    <div className="py-2 border-b border-gray-300 mb-4">
      <div className="relative w-full h-[300px] bg-gray-100">
        <Image
          src={data?.urlToImage ? data.urlToImage : '/img/floodwatch.ph.png'}
          alt={data?.title}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 100vw, 100vw"
          className="object-cover"
        />
      </div>

      {/* ✅ no need for legacyBehavior, use Link directly */}
      <Link 
        href={data?.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="font-bold text-lg"
      >
        {data?.title}
      </Link>

      <div className="flex space-x-4 my-2">
        <Tag data={data?.source.name} />
        <Tag data={data?.author} />
        <Tag data={new Date(data?.publishedAt).toDateString()} />
      </div>

      <p className="text-sm">{data?.description}</p>
    </div>
  )
}

export default Article
