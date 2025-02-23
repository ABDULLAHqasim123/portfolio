import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black
    text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'> 
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <p className='text-xl mt-20'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Provident blanditiis asperiores vitae, tempora ipsa et officiis alias perferendis iure! 
            Ipsum itaque blanditiis dolore ex deleniti repudiandae obcaecati porro aspernatur placeat,
             accusamus accusantium minima nisi architecto magni consequatur aliquid libero atque iusto
               dolor neque amet sequi. Placeat nihil natus culpa distinctio.
        </p >
        <br />


        <p className='text-xl'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Provident blanditiis asperiores vitae, tempora ipsa et officiis alias perferendis iure! 
            Ipsum itaque blanditiis dolore ex deleniti repudiandae obcaecati porro aspernatur placeat,
             accusamus accusantium minima nisi architecto magni consequatur aliquid libero atque iusto
               dolor neque amet sequi. Placeat nihil natus culpa distinctio.
        </p>
      </div>
    </div>
  )
}

export default About
