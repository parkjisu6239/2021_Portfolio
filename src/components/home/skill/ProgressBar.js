import styles from './ProgressBar.module.css'
import styled from "styled-components";

const StyledProgressBar = styled.div`
  border-radius: 20px;
  width: ${props => props.progress}%;
  height: 100%;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.8);
  text-align: end;
  padding: 1px 10px;
  background-color: #E15361;
`;

export default function ProgressBar({ language, data }) {
    return (
      <div className={styles.progressContainer}>
        <div className={styles.progressBackground}>
          <StyledProgressBar progress={data}>{data}%</StyledProgressBar>
        </div>
        <span className={styles.language}>{language}</span>
      </div>
    )
}