import React from 'react'
import Card from './common/card';

const cardsData = [
    {
      title: "SAP",
      subtitle: "Empower Your Business",
      description: "Empower your business with tailored SAP solutions.",
      image: "path/to/sap-image.jpg",
      link: "/services/sap"
    },
    {
      title: "UX UI",
      subtitle: "Transforming Ideas",
      description: "Transforming ideas into intuitive user experiences.",
      image: "path/to/uxui-image.jpg",
      link: "/services/ux-ui"
    },
  ];
export default function Industries() {
    return (
    <div className='container indus'>
      <i className='indus-text'><li>INDUSTRIES</li></i>
    <div className='indus-content'>
      <h3 className='indus-content'>Paying the road to a digital <br/>change</h3>
      <div>
      {cardsData.map((card, index) => (
      <Card 
        key={index}
        title={card.title}
        subtitle={card.subtitle}
        description={card.description}
        image={card.image}
        link={card.link}
      />
    ))}
      </div>
    </div>
    </div>
  )
}
