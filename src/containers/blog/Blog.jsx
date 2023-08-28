import { Article } from '../../components'
import blog1Image from '../../assets/r-blog01.png';
import blog2Image from '../../assets/r-blog02.png';
import blog3Image from '../../assets/r-blog03.png';
import blog4Image from '../../assets/r-blog04.png';
import blog5Image from '../../assets/r-blog05.png';
import './blog.css'

const Blog = () => {
  return (
    <section className='gpt3__blog section__padding'>
      <div className='gpt3__blog-headding'>
        <h2 className='gradient__text'>A lot is happening,<br />We are blogging about it.</h2>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_grupA'>
          <Article
            imageUrl={blog1Image}
            date='Sep 26, 2021'
            title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
          />
        </div>
        <div className='gpt3__blog-container_grupB'>
          <Article
            imageUrl={blog2Image}
            date='Sep 26, 2021'
            title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
          />
          <Article
            imageUrl={blog3Image}
            date='Sep 26, 2021'
            title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
          />
          <Article
            imageUrl={blog4Image}
            date='Sep 26, 2021'
            title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
          />
          <Article
            imageUrl={blog5Image}
            date='Sep 26, 2021'
            title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
          />
        </div>
      </div>
    </section>
  )
}

export default Blog