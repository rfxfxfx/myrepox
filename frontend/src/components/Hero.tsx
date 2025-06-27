import { Button } from "./ui/button";
import { useTheme } from "../components/theme-provider";

const Hero = () => {
  const { theme } = useTheme();

  const learnMoreButtonClasses = 
    theme === 'dark'
      ? 'border-white text-white hover:bg-white hover:text-black'
      : 'border-gray-700 text-gray-800 hover:bg-gray-100 hover:text-black';

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        loop
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        <source src="vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div> 
      
      {/* Content Container */}
      <div className="container px-6 md:px-8 lg:px-12 relative z-20 pt-20 md:pt-28"> {/* Added pt- to push content below navbar */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center text-white">
          
          {/* Right Image/Visual Column - Now order-first on mobile */}
          <div className="flex items-center justify-center lg:justify-end md:order-first"> {/* Added md:order-first */}
            <div className="relative w-full max-w-[600px] aspect-[4/3] rounded-3xl border-2 border-gray-200 bg-background p-3 shadow-2xl overflow-hidden
              transform hover:scale-105 transition-transform duration-500 ease-out">
             
              <a 
                href="https://www.facebook.com/ralph.lawrence.568847/">


              <img
                alt="Digital Experience Showcase"
                className="w-full h-full object-cover rounded-2xl"
                src="ceo.jpg"
                width={800}
                height={600}
              />
              </a>



              <div className="absolute inset-0 rounded-2xl pointer-events-none border border-white/20"></div>
              <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800 rounded-t-2xl flex items-center px-3 gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
            </div>
          </div>

          {/* Left Content Column - Default order */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl font-extrabold md:tracking-tight sm:text-4xl md:text-5xl lg:text-6xl/tight"> 
                Transforming Ideas into 
                <span className="bg-gradient-to-r from-purple-600 to-cyan-500 text-transparent bg-clip-text"> Digital Experiences</span>
              </h1>
              <p className="max-w-[650px] mx-auto lg:mx-0 text-base md:text-lg text-gray-300 leading-relaxed">
                We craft stunning, highly responsive websites that elevate your brand, engage your audience, and drive measurable results. Our designs are not just beautiful—they're strategically built for success and also the <span className="font-bold bg-gradient-to-r from-purple-600 to-cyan-500 text-transparent bg-clip-text">cheapest</span> on the market.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out
                bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600
                focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:outline-none">
                <a href="#portfolio"> View Our Work </a>
              </Button>
          
            </div>
            
            {/* Client Trust Section */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
              <div className="flex -space-x-3">
                {/* Image elements removed here - these were the pravatar images previously */}
              </div>
              <div className="text-lg md:text-xl font-medium text-white">
                Trusted by <span className="text-purple-400">10+</span> satisfied clients
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;