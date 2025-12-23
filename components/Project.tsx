import React from 'react';

// --- 1. Types and Data ---

// Define the interface for a project item
export interface ProjectItem {
  id: string | number;
  imageSrc: string; // Path to your cropped laptop image
  altText: string;
  // You could add title/description here if needed later
}

// MOCK DATA: Replace 'imageSrc' URLs with your actual local images (e.g., '/images/laptop1.png')
const leftColumnProjects: ProjectItem[] = [
  {
    id: 'l1',
    // Using placeholders. REPLACE THESE.
    imageSrc: './project1.jpg', 
    altText: 'Strong Roots project on laptop',
  },
  {
    id: 'l2',
     // Using placeholders. REPLACE THESE.
    imageSrc: './project2.png',
    altText: 'Mental Math Puzzles project on laptop',
  },
];

const rightColumnProjects: ProjectItem[] = [
  {
    id: 'r1',
     // Using placeholders. REPLACE THESE.
    imageSrc: './project3.png',
    altText: 'Author website project on laptop',
  },
  {
    id: 'r2',
     // Using placeholders. REPLACE THESE.
    imageSrc: './project4.png',
    altText: 'Ashok Chronicles project on laptop',
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
    <div className={`relative w-full h-auto rounded-3xl overflow-hidden transition-transform hover:scale-[1.02] duration-300 ${className}`}>
      {/* Ensure your images are high quality and cropped tightly to the laptop */}
      <img
        src={project.imageSrc}
        alt={project.altText}
        className="w-full h-auto object-cover block"
        loading="lazy"
      />
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
            <div className="mb-12">
               <h2 className="text-4xl md:text-5xl lg:text-[96px] font-bold uppercase tracking-tight leading-tight font-sans">
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
            {/* Used flex and justify-end to align text to the right */}
            <div className="mb-12 flex justify-start md:justify-end items-start pt-4">
              <div className="text-left md:text-right">
                <p className="text-white text-sm md:text-base uppercase tracking-[0.2em] font-medium mb-2">
                  Explore our <br /> diverse range <br /> of services
                </p>
                {/* Decorative underline */}
                <div className="h-0.5 bg-white w-24 ml-0 md:ml-auto opacity-50"></div>
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