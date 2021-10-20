import { motion } from 'framer-motion'
import React from 'react'
import { fadeInUp, routeFade, stagger } from '../animations'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data'

const index = () => {

  return (
    <motion.div
      className='flex flex-col flex-grow px-6 pt-1'
      variants={routeFade}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h5 className='my-3 font-medium'>I am self-driven and keen at learning new technology trends.
        As a Front-End Developer, I highly value the ability to gain user satisfaction for which perfomance and user experience must be a solid idea.
        I am currently focusing on React Js application and using impressive frameworks like Next and Gatsby.
      </h5>
      <div className='flex-grow p-4 mt-5 bg-gray-200 dark:bg-dark-100'
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>

        <h4 className='my-3 text-xl font-semibold tracking-wide text-blue-400'>
          What I Offer
        </h4>

        <motion.div
          className='grid gap-6 my-3 md:grid-cols-2'
          variants={stagger}
          animate="animate"
          initial="initial"
        >
          {
            services.map(service => (
              <motion.div
                variants={fadeInUp}                
                className='col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1'
                key={service.title}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))
          }
        </motion.div>
      </div>
    </motion.div>
  )
}

export default index
