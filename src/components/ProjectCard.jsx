import {projects} from "../data/projects";


function ProjectCard({ project }) {
  return (
    <div className="rounded-xl border shadow-sm hover:shadow-lg transition overflow-hidden bg-white">
      {project.imageUrl ? (
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
          No Image
        </div>
      )}

      <div className="p-5">
        <h3 className="text-xl font-semibold">{project.title}</h3>

        <p className="mt-2 text-gray-600">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-5 text-blue-600 hover:underline"
        >
          View Project →
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;