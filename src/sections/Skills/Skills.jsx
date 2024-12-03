import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Ferramentas e Tecnologias</h1>
      <h1 className="sectionTitle01">Back End
      </h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="Spring Boot" />
        <SkillList src={checkMarkIcon} skill="Go" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="AWS" />
        <SkillList src={checkMarkIcon} skill="Sql" />
        <SkillList src={checkMarkIcon} skill="MongoDB" />
      </div>
      <hr />
      <h1 className="sectionTitle01">Metodologias Ágeis</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Kanban" />
        <SkillList src={checkMarkIcon} skill="Scrum" />
      </div>
      <hr />
      <h1 className="sectionTitle01">Controle de Versão</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="GitHub" />
      </div>
      <hr />
    </section>
  );
}

export default Skills;
