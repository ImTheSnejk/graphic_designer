import React, { use } from 'react'

import { useState } from 'react'

const ProjectSection = () => {

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [

    {
        id:1,
        title: "The main charakter",
        company:"Dark Fantasy Campaign",
        image:"im1.jpg",
        description:"Visual identity and key art design for a dark fantasy promotional campaign, focusing on atmospheric lighting and immersive storytelling",
    },

    {
        id:2,
        title: "Cosmetic",
        company:"Beauty Brand Visual Identity",
        image:"im2.jpg",
        description:"Elegant brand presentation including packaging mockups and refined visual direction for a modern cosmetic company",
    },

    {
        id:3,
        title: "Front page of the Book",
        company:"Book Cover Series",
        image:"im3.jpg",
        description:"A series of fantasy book covers designed with dramatic lighting and textured typography",
    },

    {
        id:4,
        title: "Product Launch Mockup – Auralith X9z",
        company:"Auralith Audio",
        image:"im4.jpg",
        description:"Product launch visuals for Auralith Audio, a company specializing in high-end wireless speakers. The mockup presents their new flagship model Auralith X9",
    },


    {
        id:5,
        title: "Main Page of this Game Studio",
        company:"Game Cover Artwork",
        image:"im5.jpg",
        description:"Cinematic cover art created for a sci-fi action game, combining dramatic contrast and futuristic design elements",
    },

    {
        id:6,
        title: "Luxury Branding",
        company:"Luxury Branding",
        image:"im6.jpg",
        description:"Full brand identity design including logo, packaging, and promotional visuals for a premium fashion brand",
    },

    {
        id:7,
        title: "Kael Viree",
        company:"Kael Vire",
        image:"im7.jpg",
        description:"Album cover artwork created for fictional alternative artist Kael Vire.",
    },

    {
        id:8,
        title: "Smart Ambient Lamp Campaign",
        company:"LumaCore Lighting",
        image:"im8.jpg",
        description:"Social media campaign visuals created for LumaCore Lighting to promote their new smart ambient lamp.",
    },    
  ]

  return (

    <section className='sec'>

      <div className='w-full'>

        <h2 className='text-heading text-4xl mb-8'>My Projects</h2>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>

            {projects.map(project => (

                <div key={project.id} onClick={() => setSelectedProject(project)} className='cursor-pointer' > 
                <img src={project.image} className='rounded-xl shadow-md hover:scale-105 transition duration-300' /></div>
            ))}
        </div>
      </div>

      {selectedProject && (

          <div className='fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4'>

            <div className='bg-[#E8E3DC] p-8 rounded-2xl max-4xl w-1/2 relative shadow-2xl'>

              <button onClick={() => setSelectedProject(null)} className='absolute top-4 right-4 text-xl' > ✕ </button>

              <img src={selectedProject.image} className='rounded-xl mb-6'/>

              <h2 className='text-2xl font-bold mb-2'> {selectedProject.title} </h2>

              <p className='text-sm text-[#7A756F] mb-4'> {selectedProject.company}</p>

              <p>{selectedProject.description}</p>

            </div>

          </div>

      )}

    </section>
    
  )
}

export default ProjectSection
