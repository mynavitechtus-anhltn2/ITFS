import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

type Props = {
  src: string;
  title: string;
  height?: number;
};

export default function HtmlEmbed({ src, title, height = 420 }: Props) {
  const url = useBaseUrl(src);
  return (
    <figure className={styles.wrapper}>
      <iframe
        className={styles.frame}
        src={url}
        title={title}
        height={height}
        loading="lazy"
      />
      <figcaption className={styles.caption}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Mở trong tab mới
        </a>
      </figcaption>
    </figure>
  );
}
