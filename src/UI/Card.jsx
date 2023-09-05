import styles from "./Card.module.css";

const Section = (props) => {
  return <section className={styles.card}>{props.children}</section>;
};

export default Section;
