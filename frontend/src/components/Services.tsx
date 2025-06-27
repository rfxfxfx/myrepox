import { Code, Palette, Smartphone, Globe, Zap, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const Services = () => {
  const services = [
    {
      icon: (
        <div className="
          flex items-center justify-center
          w-16 h-16 rounded-xl
          bg-gradient-to-br from-purple-600 to-cyan-500
          shadow-md
          transform -translate-y-1
        ">
          <Palette className="h-9 w-9 text-white dark:text-gray-900" />
        </div>
      ),
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user experiences that keep visitors coming back."
    },
    {
      icon: (
        <div className="
          flex items-center justify-center
          w-16 h-16 rounded-xl
          bg-gradient-to-br from-purple-600 to-cyan-500
          shadow-md
          transform -translate-y-1
        ">
          <Code className="h-9 w-9 text-white dark:text-gray-900" />
        </div>
      ),
      title: "Web Development",
      description: "Building fast, responsive, and feature-rich websites using the latest technologies."
    },
    {
      icon: (
        <div className="
          flex items-center justify-center
          w-16 h-16 rounded-xl
          bg-gradient-to-br from-purple-600 to-cyan-500
          shadow-md
          transform -translate-y-1
        ">
          <Smartphone className="h-9 w-9 text-white dark:text-gray-900" />
        </div>
      ),
      title: "Mobile-First Design",
      description: "Ensuring your website looks and works perfectly on all devices and screen sizes."
    },
    {
      icon: (
        <div className="
          flex items-center justify-center
          w-16 h-16 rounded-xl
          bg-gradient-to-br from-purple-600 to-cyan-500
          shadow-md
          transform -translate-y-1
        ">
          <Globe className="h-9 w-9 text-white dark:text-gray-900" />
        </div>
      ),
      title: "E-Commerce Solutions",
      description: "Creating online stores that drive sales and provide seamless shopping experiences."
    },
    {
      icon: (
        <div className="
          flex items-center justify-center
          w-16 h-16 rounded-xl
          bg-gradient-to-br from-purple-600 to-cyan-500
          shadow-md
          transform -translate-y-1
        ">
          <Zap className="h-9 w-9 text-white dark:text-gray-900" />
        </div>
      ),
      title: "Performance Optimization",
      description: "Speeding up your website for better user experience and search engine rankings."
    },
    {
      icon: (
        <div className="
          flex items-center justify-center
          w-16 h-16 rounded-xl
          bg-gradient-to-br from-purple-600 to-cyan-500
          shadow-md
          transform -translate-y-1
        ">
          <Users className="h-9 w-9 text-white dark:text-gray-900" />
        </div>
      ),
      title: "CMS Integration",
      description: "Implementing content management systems that make updating your site easy."
    }
  ];

  return (
    <section id="services" className="relative py-20 md:py-28 min-h-screen flex items-center overflow-hidden">
      {/* Video Background (same as Hero) */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        loop
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        <source src="vid2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div> 
      
      {/* Content Container - z-index ensures it's above video/overlay. Text is white. */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 relative z-20 text-white"> 
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16 md:mb-20">
          <div className="space-y-2">
            <p className="text-base font-semibold text-purple-400 mb-2">Our Services</p> {/* Changed to purple-400 for dark background */}
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white inline-block"> {/* Changed text-foreground to text-white */}
              What We <span className="bg-gradient-to-r from-purple-600 to-cyan-500 text-transparent bg-clip-text">Offer</span>
            </h2>
            <p className="max-w-3xl text-lg md:text-xl text-gray-300 mt-4 leading-relaxed"> {/* Changed text-muted-foreground to gray-300 */}
              We provide comprehensive web design and development services to help your business thrive online. Our solutions are crafted for impact.
            </p>
          </div>
        </div>
        
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden transition-all duration-300 ease-in-out
                         hover:shadow-xl hover:scale-[1.02] border border-gray-700 dark:border-gray-600
                         dark:hover:border-purple-600 hover:border-purple-300 rounded-xl
                         bg-white/10 backdrop-blur-sm shadow-xl" /* Made cards semi-transparent with blur */
            >
              {/* Subtle gradient overlay on hover remains, now over semi-transparent card */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardHeader className="relative z-10 pb-4">
                <div className="mb-2">{service.icon}</div>
                <CardTitle className="text-white text-xl font-bold">{service.title}</CardTitle> {/* Changed text-foreground to text-white */}
              </CardHeader>
              <CardContent className="relative z-10 pt-0">
                <CardDescription className="text-gray-300 text-base leading-relaxed">{service.description}</CardDescription> {/* Changed text-muted-foreground to gray-300 */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;