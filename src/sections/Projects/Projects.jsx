import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/Gerencionamento.png';
import screen from '../../assets/ScreenMatch.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">About Me</h1>
      <div className={styles.aboutMe}>
          <h3>Sobre Mim</h3>
          <p>
            Sou <strong>Tallis Teixeira de Melo</strong>, desenvolvedor Back-End em formação, cursando <strong>Análise e Desenvolvimento de Sistemas</strong> no Centro Universitário de Lavras (Unilavras). Tenho foco em Java. 
          </p>
          <p>
            Busco sempre aprimorar minhas habilidades, aplicando boas práticas de programação, e contribuindo para equipes e projetos desafiadores com forte compromisso com o aprendizado contínuo.
          </p>
        </div>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/tallismelo07/Gerencionamento-de-Eventos"
          h3="EventWise"
          p="Sistema de Gerenciamento de Eventos"
        />
        </div>
        <div className={styles.projectsContainer}>
        <ProjectCard
          src={screen}
          link="https://github.com/tallismelo07/screen-match"
          h3="Screen Match"
          p="Aplicativo de Filmes"
        />
        </div>
    </section>
  );
}

export default Projects;
