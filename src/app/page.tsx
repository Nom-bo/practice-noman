import React from 'react'

const page = () => {
  return(
    <div><figure className="bg-lime-100 rounded-xl p-8 dark:bg-slate-800">
    <img className="w-24 h-24 rounded-full mx-auto" src="/noman.jpg" alt="" width="484" height="612"/>
    <div className="pt-6 text-center space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “I am Mian Noman Aslam, From Rahim Yar Khan Working as a Freelancer on different platforms like upwork fiverr.
          My core services are lead generation, data entry, research and wordpress. Except it i also have more than 2
          years experience as an CSR at MindBridge Lahore and more than 7 years experience as a Project Manager at
          Appstac Solutions, Lahore.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Mian Noman Aslam
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Freelancer, Upwork
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page