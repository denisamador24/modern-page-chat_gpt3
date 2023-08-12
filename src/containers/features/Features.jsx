import React from 'react'
import { Feature } from '../../components'
import './features.css'

const Features = () => {
  const featuresData = [
    {
      title: 'Improving end distrusts instantly',
      text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
    },
    {
      title: 'Become the tended active',
      text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
    },
    {
      title: 'Message or am nothing',
      text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
    },
    {
      title: 'Really boy law county',
      text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
    },
  ];


  return (
    <section id="features" className='gpt3__features section__margin'>
      <div className='gpt3__features-heading'>
        <p className='gpt3__features-heading__title'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</p>
        <p className='gpt3__features-heading__text'>Request Early Access to Get Started</p>
      </div>
      <div>
        {featuresData.map( (feature, index )=> {
          <Feature
            key={index}
            title={feature.title}
            text={feature.text}
          />
        })}
      </div>
    </section>
  )
}

export default Features