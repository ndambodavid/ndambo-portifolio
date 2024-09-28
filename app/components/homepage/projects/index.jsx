import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';
import SectionTitle from '../../helper/section-title';
import Link from 'next/link';
import { FaLongArrowAltRight } from 'react-icons/fa';
import GlowCard from '../../helper/glow-card';

const Projects = ({ projects, profile }) => {

  return (
    <div id='projects' className="relative z-50  my-12 lg:my-24">
      <SectionTitle title="Git Projects" />

      {/* <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 4).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <div className="grid py-12 grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
        {
          projects.slice(0, 8).map(project => (
            <GlowCard key={project.id} identifier={`project-${project.id}`}>
              <ProjectCard project={project} />
            </GlowCard>
          ))
        }
      </div>

      <div className="w-full justify-center flex items-center">
        <Link href={profile.html_url} target='_blank' className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
          <button className="px-3 text-xs md:px-4 py-2 md:py-2.5 bg-[#0d1224] rounded-full border-none text-center font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
            <span>View All Project</span>
            <FaLongArrowAltRight size={16} />
          </button>
        </Link>
      </div>
    </div>

  );
};

export default Projects;