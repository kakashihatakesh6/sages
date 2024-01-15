import React from 'react'

const About = () => {


  return (
    <div>
      <section className="text-gray-600 body-font" data-aos="fade-up">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" src="/slider/aatma.png" />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <svg fill="none" stroke="currentColor" strokeLincap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Phoebe Caulfield <br />(Principal)</h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4"><span className='font-semibold text-blue-500'>Welcome to SAGES, Bhopalpatnam</span><br />

                  Kolkata on 1 April 1954 was, well, a quite different city. The Independence of the country was only seven years old. India was practically reborn and so were its cities. Kolkata, still, had much more green and open expanses of land. Its southern parts were sparsely populated and this cozy community was waiting for an educational institution where learning and growing up would happen in a happy and innovative environment. A new nest that would teach their little ones to fly on confident wings.

                  South Point School, an English-medium and co-educational school, opening its gates at 16 Mandeville Gardens on 1 April 1954, was an answer to the community’s prayers.

                  It captured the popular imagination since the moment of its foundation. Shri Satikanta Guha and Smt. Pritylata Guha, Founder and Associate Founder of the School, nurtured earliest Pointers – just twenty in number — with an inspired mix of love, care and utmost responsibility. To help the Founders fulfil their vision and mission was a handful of dedicated teachers. And, the initial faculty was an enviable collection of stalwarts from the cultural, literary and artistic milieu of Bengal. Their genius improved manifold the ambience of creative purposefulness so that every child who crossed the gates of the early, quaint bungalow knew his or her potential would never be left unfulfilled.

                  The School which had welcomed twenty children in a distant summer has spread its rainbow wings in much the same way as its students have. The journey, taken since 1954, has been a magical one, marked by splendid milestones. The comely bungalow soon grew into newer, bigger buildings so that it could bring more and more children into its fold. The early faculty handed the batons over to a burgeoning number of teachers who were equally committed and fully trained to keep up with the changing times. South Point High School was the first co-educational School in the city to be affiliated to the West Bengal Board of Secondary Education. The first School Final batch was sent up in 1958.

                  April seems to be the happiest month in the evolution of South Point. On another 1 April – this time in 1960 – it was upgraded to the Higher Secondary level. The High School found a new, and the present, premises on 8 April 1970 at 82/7A Ballygunge Place. The School is now run by the South Point Education Society.

                  The growing family of South Point has the rare distinction of winning a place in the Guinness Book of Records (1984-1992) as the world’s largest School.</p>
                <a className="text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" strokeLincap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About


// background: linear-gradient(45deg, #c48383, #8bedf7);