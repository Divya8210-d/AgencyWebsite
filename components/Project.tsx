import React from 'react';

// --- 1. Types and Data ---

// Define the interface for a project item
export interface ProjectItem {
  id: string | number;
  imageSrc: string; // Path to your cropped laptop image
  altText: string;
  title: string;
  description: string;
}

// MOCK DATA: Replace 'imageSrc' URLs with your actual local images (e.g., '/images/laptop1.png')
const leftColumnProjects: ProjectItem[] = [
  {
    id: 'l1',
    // Using placeholders. REPLACE THESE.
    imageSrc: './project1.jpg',
    altText: 'Strong Roots project ',
    title: 'Strong Roots',
    description: 'A comprehensive branding and web solution for non-profit organizations.',
  },
  {
    id: 'l2',
    // Using placeholders. REPLACE THESE.
    imageSrc: './project2.png',
    altText: 'Book Publishing Website',
    title: 'Caroling Pen Publishing',
    description: 'A refined digital identity and platform designed for modern book publishing houses.',
  },
];

const rightColumnProjects: ProjectItem[] = [
  {
    id: 'r1',
    // Using placeholders. REPLACE THESE.
    imageSrc: './project3.png',
    altText: 'Blog Website',
    title: 'Ashok Chronicles',
    description: 'A dynamic blog and storytelling platform with rich media integration.',
  },
  {
    id: 'r2',
    // Using placeholders. REPLACE THESE.
    imageSrc: './project4.png',
    altText: 'Mental Math Project',
    title: 'Hectoclash',
    description: 'A multiplayer math game with real time chating and connection features.',
  },
];


// --- 2. Reusable Card Component ---

interface ProjectCardProps {
  project: ProjectItem;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '' }) => {
  return (
    // This container handles the rounded corners and overflow of the mockup images
    <div className={`group relative w-full h-auto rounded-3xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] ${className}`}>
      {/* Ensure your images are high quality and cropped tightly to the laptop */}
      <img
        src={project.imageSrc}
        alt={project.altText}
        className="w-full h-auto object-cover block transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-x-0 bottom-0 z-20 h-auto p-6 md:p-8 translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 bg-black/60 backdrop-blur-md border-t border-white/10 text-white">
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-cyan-400">{project.title}</h3>
        <p className="text-base md:text-lg text-gray-200 leading-relaxed font-poppins">{project.description}</p>
      </div>

      {/* Gradient for readability when overlay is not fully up or just as aesthetic bg */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

    </div>
  );
};


// --- 3. Main Section Component ---

const ProjectSection: React.FC = () => {
  return (
    <section className="bg-black py-16 px-4 sm:px-8 lg:px-16 min-h-screen flex justify-center items-center overflow-hidden">
      {/* Main Container - Max width for large screens */}
      <div className="max-w-7xl w-full mx-auto">

        {/* THE MASTER GRID 
           - Take two cells horizontally on medium screens and up (md:grid-cols-2).
           - Significant horizontal gap (gap-x-16).
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-12 relative">

          {/* ----- LEFT CELL (COLUMN) ----- */}
          <div className="flex flex-col">
            {/* Top cell: Left Header */}
            {/* Centered on mobile by default via flex behavior in parent if not specified, but here using text-left/center classes */}
            <div className="mb-8 md:mb-12 text-center md:text-left">
              <h2 className="text-[64px] sm:text-[84px] lg:text-[96px] font-bold uppercase tracking-tight leading-tight font-sans">
                <span className="text-cyan-400 block mb-2">Precision Projects</span>
                <span className="text-white">That Speak For Themselves</span>
              </h2>
            </div>

            {/* Bottom cell: Two cards flex vertically.
               CRITICAL: This container has extra top margin (mt-12 or mt-24) 
               to push it lower than the right column.
            */}
            <div className="flex flex-col gap-y-12 md:mt-24 z-10 relative">
              {leftColumnProjects.map((proj) => (
                <ProjectCard key={proj.id} project={proj} />
              ))}
            </div>
          </div>

          {/* ----- RIGHT CELL (COLUMN) ----- */}
          <div className="flex flex-col">
            {/* Top cell: Right Text Header */}
            {/* Used flex and justify-end to align text to the right on desktop, center on mobile */}
            <div className="mb-12 flex justify-center md:justify-end items-start pt-4">
              <div className="text-center md:text-right">
                <p className="text-white text-base md:text-lg uppercase tracking-[0.2em] font-medium mb-2 leading-relaxed font-poppins">
                  Explore our <br className="hidden md:block" /> diverse range <br className="hidden md:block" /> of services
                </p>
                {/* Decorative underline */}
                <div className="h-0.5 bg-white w-24 mx-auto md:mx-0 md:ml-auto opacity-50"></div>
              </div>
            </div>

            {/* Bottom cell: Two cards vertically aligned.
               No extra top margin here, so they sit higher up.
            */}
            <div className="flex flex-col gap-y-12 z-10 relative">
              {rightColumnProjects.map((proj) => (
                <ProjectCard key={proj.id} project={proj} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectSection;