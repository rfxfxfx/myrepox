import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { useTheme } from '../components/theme-provider';

const projectsData = [
  {
    id: 1,
    title: "Modern Dental Clinic Site",
    category: "Clinic",
    image: "dental.jpg", 
    description: "A modern dental clinic design with fast loading and direct contact to Messenger app.",
    siteUrl: "https://goodtoothdentalclinic.com"
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All Projects');
  const { theme } = useTheme();

  const prefersDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDarkMode = theme === 'dark' || (theme === 'system' && prefersDark);

  const filteredProjects = filter === 'All Projects'
    ? projectsData
    : projectsData.filter(project => project.category === filter);

  return (
    <section
      id="portfolio"
      className={`relative py-20 md:py-28 min-h-screen flex items-center overflow-hidden ${
  isDarkMode ? 'text-white' : 'text-black'
}`}
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        loop
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        <source src="vid3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div> 
      
      {/* Content */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16 md:mb-20">
          <h4 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground inline-block">
            <span className="bg-gradient-to-r from-purple-600 to-cyan-500 text-transparent bg-clip-text">
              Recent Projects
            </span>
          </h4>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mt-4 leading-relaxed">
            Explore our latest web design and development projects that showcase our expertise and creativity.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16">
          {['All Projects', 'Clinic', 'Shop', 'Gym'].map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? 'default' : 'outline'}
              className={`
                px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${filter === category
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white shadow-md'
                  : isDarkMode
                    ? 'border border-gray-600 hover:border-purple-600 hover:bg-gray-700/20 text-white' 
                    : 'border border-gray-300 hover:border-purple-400 hover:bg-gray-100 text-gray-800'
                }
              `}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredProjects.map((project) => (
       <Card
  key={project.id}
  className="group relative overflow-hidden rounded-2xl border shadow-xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl backdrop-blur-md bg-black/50 text-white border-white/20"
>
  {/* Image */}
  <div className="relative aspect-video overflow-hidden">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>

  {/* Content */}
  <CardHeader className="relative z-10 p-5">
    <CardTitle className="text-lg font-semibold leading-snug mb-1 text-white">
      {project.title}
    </CardTitle>
    <CardDescription className="text-xs uppercase tracking-wide text-gray-300">
      {project.category}
    </CardDescription>
  </CardHeader>

  <CardContent className="relative z-10 px-5 pb-5">
    <p className="text-sm leading-relaxed mb-4 hidden sm:block text-gray-200">
      {project.description}
    </p>
    <a
      href={project.siteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <Button
        variant="ghost"
        className="text-cyan-400 hover:text-cyan-300"
      >
        View Details
      </Button>
    </a>
  </CardContent>
</Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
