import { FaDribbble, FaFacebook, FaInstagram } from "react-icons/fa";
import ProjectSection from "./components/ProjectSection";

export default function App() {
  return (
    <div className="dcon">

      <section className="sec">

        <div className="flex flex-col">

          <h1 className="text-heading text-4xl text-left mb-4">Alex <span className="role">Graphic Designer</span></h1>

          <div className="hdiv">

            <img className="zdjalex" alt="Alex - Graphic Designer portrait" src="alex.jpg" />

            <p className="textmain backgroundp"> Hi! Im Alex a France-based Graphic Designer with 9 years of experience shaping visual stories.

                  I create designs that blend atmosphere, emotion, and bold imagination. My work lives in the space between light and shadow, where dark tones meet fantasy-inspired worlds.

                  Using tools like Photoshop, Illustrator, XD, and Sketch, I craft visuals that feel immersive and expressive — from striking compositions to subtle details that build mood and depth.

                For me, design is more than aesthetics. It’s about creating a feeling, a presence, a visual identity that stays with you.
            </p>

          </div>
          
        </div>

        <div className="mt-10 flex justify-center">
          <div className="scroll-indicator text-[#A2674C] text-3xl">↓</div>
        </div>

      </section>

      <ProjectSection />

      <section className="sec">
        
        <div className="w-full max-w-xl mx-auto p-6">
          <h3 className="text-heading text-4xl text-center font-bold mb-6">Contact Me</h3>

          <form className="fform">

            <input type="text" name="username" placeholder="Your Name.." required className="forinput" />
            <input type="email" name="email" placeholder="Your E-Mail.." required className="forinput" />
            <textarea name="message" placeholder="Your Message..." rows="8" required className="fortextarea" />

            <button type="submit" className="butt w-full" >Send Message</button>
          </form>

        </div>
   
      </section>

    <footer className="w-full flex bg-[#A2674C] mt-20">

        <div className="max-w-7xl mx-auto px-6 py-12">

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-white">

              <h4 className="text-white text-2xl font-semibold text-center tracking-wide">© 2026 Alex. All rights reserved.</h4>

              <ul className="flex gap-8 items-center text-2xl">
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:opacity-80 transition-all duration-300"><FaInstagram /></a></li>
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:opacity-80 transition-all duration-300"><FaFacebook /></a></li>
                <li><a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:opacity-80 transition-all duration-300"><FaDribbble /></a></li>
              </ul>

          </div>

        </div>

    </footer>

    </div>
  )
}
