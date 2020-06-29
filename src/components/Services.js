import React, { Component } from 'react';
import { FaCocktail, FaShuttleVan, FaGolfBall } from 'react-icons/fa'
import { MdRestaurant } from "react-icons/md";


export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Best Drinks",
        info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, nobis!'
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, nobis!'
      },
      {
        icon: <MdRestaurant />,
        title: "Tastiest Food",
        info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, nobis!'
      },
      {
        icon: <FaGolfBall />,
        title: "Greenest Course",
        info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, nobis!'
      }
    ]
  }


  render() {
    return (
      <section className='services'>
     
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return <article key={index} className='service'>
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          })}
        </div>
      </section>
    )
  }
}
