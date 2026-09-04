import { ProjectCard } from "./ProjectCard.jsx";

/** List nhận mảng đã lọc — không sở hữu filter state. */
export function ProjectList({ projects, onOpenProject }) {
  if (projects.length === 0) {
    return <p className="empty">Không có dự án khớp bộ lọc.</p>;
  }

  return (
    <div className="project-grid">
      {projects.map((p) => (
        <ProjectCard
          key={p.id}
          title={p.title}
          desc={p.desc}
          starred={p.starred}
          onOpen={() => onOpenProject(p)}
        />
      ))}
    </div>
  );
}
