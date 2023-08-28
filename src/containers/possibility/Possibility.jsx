import PossibilityImage from '../../assets/r-possibility.png';
import './possibility.css'

const Possibility = () => {
  return (
    <section id='possibility' className='gpt3__possibility section__padding'>
      <figure className='gpt3__possibility-image'>
        <img src={PossibilityImage} alt="Woman" />
      </figure>
      <article className='gpt3__possibility-content'>
        <span>Request Early Access to Get Started</span>
        <h2 className='gpt3__possibility-content__title gradient__text'>The possibilities are beyond your imagination</h2>
        <p className='gpt3__possibility-content__text'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <span>Request Early Acce  ss to Get Started</span>
      </article>
    </section>
  )
}

export default Possibility