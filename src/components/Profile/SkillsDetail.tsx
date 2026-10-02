import styles from './Skills.module.css';
import skillImg01 from './images/icon-html.png';
import skillImg02 from './images/icon-css.png';
import skillImg03 from './images/icon-js.png';
import skillImg04 from './images/icon-php.png';
import skillImg05 from './images/icon-wp.png';
import skillImg06 from './images/icon-nextJs.png';
import skillImg07 from './images/icon-react.png';

const SKILLS_DATA = [
  {
    name: 'HTML',
    icon: skillImg01,
    experience: '実務経験: 5年以上',
    type: '実務経験',
  },
  {
    name: 'CSS / Sass',
    icon: skillImg02,
    experience: '実務経験: 5年以上',
    type: '実務経験',
  },
  {
    name: 'JavaScript',
    icon:skillImg03,
    experience: '実務経験: 5年以上',
    type: '実務経験',
  },
  {
    name: 'PHP',
    icon: skillImg04,
    experience: '実務経験: 4年以上',
    type: '実務経験',
  },
  {
    name: 'Wordpress',
    icon: skillImg05,
    experience: '実務経験: 4年以上',
    type: '実務経験',
  },
  {
    name: 'Next.js',
    icon: skillImg06,
    experience: '個人開発: 1年以上',
    type: '実務経験',
  },
  {
    name: 'React.js',
    icon: skillImg07,
    experience: '個人開発: 1年以上',
    type: '実務経験',
  },
];

export function SkillsDetail() {
  return (
    <div className={styles.skill}>
       <h2>SKILLS</h2>
      <div className={styles.skillCards}>
        {SKILLS_DATA.map((skill) => (
          <div key={skill.name} className={styles.skillCard}>
            <img src={skill.icon} alt="" />
            <h3>{skill.name}</h3>
            <p>{skill.experience}</p>
            <span>{skill.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}