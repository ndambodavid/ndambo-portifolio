// @flow strict

import * as React from 'react';
import Link from 'next/link';
import { IoLinkSharp } from 'react-icons/io5';
import { FaRegStar } from 'react-icons/fa';
import { FaCodeFork } from 'react-icons/fa6';
import { colors } from '@/utils/data/colors';

function ProjectCard({ project }) {

  return (
    // <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
    //   <div className="flex flex-row">
    //     <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
    //     <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
    //   </div>
    //   <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
    //     <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
    //       <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
    //       <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
    //       <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
    //     </div>
    //     <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
    //       {project.name}
    //     </p>
    //   </div>
    //   <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
    //     <code className="font-mono text-xs md:text-sm lg:text-base">
    //       <div className="blink">
    //         <span className="mr-2 text-pink-500">const</span>
    //         <span className="mr-2 text-white">project</span>
    //         <span className="mr-2 text-pink-500">=</span>
    //         <span className="text-gray-400">{'{'}</span>
    //       </div>
    //       <div>
    //         <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
    //         <span className="text-gray-400">{`'`}</span>
    //         <span className="text-amber-300">{project.name}</span>
    //         <span className="text-gray-400">{`',`}</span>
    //       </div>

    //       <div className="ml-4 lg:ml-8 mr-2">
    //         <span className=" text-white">tools:</span>
    //         <span className="text-gray-400">{` ['`}</span>
    //         {
    //           project.tools.map((tag, i) => (
    //             <React.Fragment key={i}>
    //               <span className="text-amber-300">{tag}</span>
    //               {
    //                 project.tools.length - 1 !== i &&
    //                 <span className="text-gray-400">{`', '`}</span>
    //               }
    //             </React.Fragment>
    //           ))
    //         }
    //         <span className="text-gray-400">{"],"}</span>
    //       </div>
    //       <div>
    //         <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
    //         <span className="text-orange-400">{project.role}</span>
    //         <span className="text-gray-400">,</span>
    //       </div>
    //       <div className="ml-4 lg:ml-8 mr-2">
    //         <span className="text-white">Description:</span>
    //         <span className="text-cyan-400">{' ' + project.description}</span>
    //         <span className="text-gray-400">,</span>
    //       </div>
    //       <div><span className="text-gray-400">{`};`}</span></div>
    //     </code>
    //   </div>
    // </div>
    <Link href={project.html_url} target="_blank">
      <div className="p-8 h-48 flex flex-col justify-between bg-primary-bg">
        <div className="">
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold capitalize text-primary-title">
              {project.name}
            </p>
            <IoLinkSharp className="text-primary-icon text-xl" />
          </div>
          <p className="line-clamp-2 text-primary-text my-5 text-sm">
            {project.description}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <p className="flex items-center gap-2">
              <FaRegStar className="text-primary-icon" />
              <span>{project.stargazers_count}</span>
            </p>
            <p className="flex items-center gap-2">
              <FaCodeFork className="text-primary-icon" />
              <span>{project.forks_count}</span>
            </p>
          </div>
          <p className="flex items-center gap-2">
            <span
              style={{ backgroundColor: colors[project.language] }}
              className="w-3 h-3 rounded-full"></span>
            <span className="text-primary-text text-sm">{project.language}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;