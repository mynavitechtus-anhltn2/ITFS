import { useMemo, useState } from "react";
import { PROJECTS } from "../data.js";
import { SearchBar } from "./SearchBar.jsx";
import { StarredFilter } from "./StarredFilter.jsx";
import { ProjectList } from "./ProjectList.jsx";

/**
 * Page container — sở hữu query + starredOnly (lift state).
 * Composition · controlled state · grid responsive · native a11y
 */
export function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [starredOnly, setStarredOnly] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECTS.filter((p) => {
      const matchQuery = !q || p.title.toLowerCase().includes(q);
      const matchStar = !starredOnly || p.starred;
      return matchQuery && matchStar;
    });
  }, [query, starredOnly]);

  function handleOpen(project) {
    alert(`Mở: ${project.title}`);
  }

  function handleReset() {
    setQuery("");
    setStarredOnly(false);
  }

  return (
    <main className="page">
      <header className="page-header">
        <div className="page-heading">
          <h1>ITFS Projects</h1>
          <p className="lede">
            Filterable list: component · state · responsive · a11y tối thiểu
          </p>
        </div>
        <a className="btn btn-ghost" href="#portal">
          Về Portal
        </a>
      </header>

      <section className="toolbar card" aria-label="Bộ lọc dự án">
        <SearchBar query={query} onQueryChange={setQuery} />
        <div className="toolbar-row">
          <StarredFilter
            starredOnly={starredOnly}
            onStarredOnlyChange={setStarredOnly}
          />
          <button type="button" className="btn btn-ghost" onClick={handleReset}>
            Xóa bộ lọc
          </button>
        </div>
        <p className="meta" aria-live="polite">
          Hiển thị <strong>{filtered.length}</strong> / {PROJECTS.length} dự án
        </p>
      </section>

      <ProjectList projects={filtered} onOpenProject={handleOpen} />
    </main>
  );
}
