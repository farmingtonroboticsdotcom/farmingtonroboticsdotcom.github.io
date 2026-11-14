import { ReactNode } from "react";
import styles from "./NoContent.module.scss";
import brokenRobot from '@assets/images/icons/broken_robot.png';

export type NoContentProps = {
  children: ReactNode;
};

export default function NoContent(props: NoContentProps) {
  return (
      <div className={styles.noContent}>
        <img src={brokenRobot} className={styles.img} />
        <span className={styles.note}>{props.children}</span>
      </div>
  );
}
