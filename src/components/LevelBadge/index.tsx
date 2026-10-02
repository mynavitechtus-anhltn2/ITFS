import clsx from "clsx";
import styles from "./styles.module.css";

type Level = "J1" | "J2" | "J3" | "M1" | "M2" | "M3" | "S1" | "S2" | "S3";

export default function LevelBadge({ level }: { level: Level }) {
  const tier = level.charAt(0) as "J" | "M" | "S";
  return <span className={clsx(styles.badge, styles[tier])}>{level}</span>;
}
