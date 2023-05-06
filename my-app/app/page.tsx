import Link from 'next/link';
export default function Home() {

  
  return (
    <div className='main'>
      <div className='links'>
        <button className='links_btn'><Link href="/ayuns" className='links_tag'>아윤이의 여러모습들</Link></button>
        <button className='links_btn'><Link href="" className='links_tag'>아윤이의 여러모습들</Link></button>
      </div>
      <h1 id='title'>대단하지만 엄청나지는않은 그런 아윤이소개 사이트</h1>
    </div>
  )
}
