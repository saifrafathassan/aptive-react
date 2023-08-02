import React from 'react'
import {FaDatabase} from 'react-icons/fa'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <div className='testimonial'>
      <div className="container">
        <div className="outline">
            <div className="content">
                <i><FaDatabase/> Staxx</i>
                <p className='body'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, vitae eveniet quas, quasi commodi aut impedit voluptate eos maiores sunt laudantium similique porro fuga, reprehenderit incidunt sint enim dignissimos nihil.</p>
                <div className="name">
                    <p>Marie Chilvers</p>
                    <p>CEO, Staxx</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
