/** Một card dự án — presentational. */
export function ProjectCard({ title, desc, starred, onOpen }) {
  return (
    <article className="project-card">
      <h2>
        {title}
        {starred ? (
          <span className="star" title="Starred" aria-label="Starred">
            {" "}
            ★
          </span>
        ) : null}
      </h2>
      <p>{desc}</p>
      <div className="card-actions">
        <button type="button" className="btn btn-primary" onClick={onOpen}>
          Mở
        </button>
        <a className="btn btn-ghost" href={`#project-${title}`}>
          Chi tiết
        </a>
      </div>
    </article>
  );
}
