import webdev from '../assets/navigateur-internet.gif' 
import prog from '../assets/structure-web.gif'
import sec from '../assets/securite-des-utilisateurs.gif'
import data from '../assets/laboratoire-virtuel.gif'
import dscience from '../assets/statistiques.gif'
import other from '../assets/ellipsis.png'
import java from '../assets/téléchargement-removebg-preview.png'

export const navLinks = [
    {
      id:"About",
      title:"About",
    },
    {
      id: "Journey",
      title: "Journey",
    },
    {
      id: "Skills",
      title: "Skills",
    },
    {
      id:"Projects"  ,
      title:"Projects",
    },
    {
      id:"Certificates",
      title:"Certificates",
    },
    {
      id: "Contact",
      title: "Contact",
    },
  ];
export const journies=[
  {
    className:"vertical-timeline-element--work",
    contentStyle:{ background: '#f50b86', color: '#fff' },
    contentArrowStyle:{ borderRight: '7px solid  #f50b86' },
    date:"2023 07-08",
    iconStyle:{background: '#f50b86', color: '#fff' },
    icon:"<WorkIcon/>",
    title:"Stage d'étè",
    subtitle:"B2M-IT Cité Mahrajene",
    skills:"ERP,Microsoft Business central,Microsoft Dynamics NAV "
  },
  {
    className:"vertical-timeline-element--education",
    contentStyle:{ background: '#f50b86', color: '#fff' },
    contentArrowStyle:{ borderRight: '7px solid  #f50b86' },
    date:"2022 - present",
    iconStyle:{background: '#f50b86', color: '#fff' },
    icon:"<SchoolIcon/>",
    title:"Ecole d'Ingenieur",
    subtitle:"Enicarthage Charguia 2",
    skills:"JAVA,Securité,Data Science,Développement web/mobile,SGBD"
  },
  {
    className:"vertical-timeline-element--education",
    contentStyle:{ background: '#f50b86', color: '#fff' },
    contentArrowStyle:{ borderRight: '7px solid  #f50b86' },
    date:"2020 - 2022",
    iconStyle:{background: '#f50b86', color: '#fff' },
    icon:"<SchoolIcon/>",
    title:"Ecole Préparatoire",
    subtitle:"IPEIT Tunis",
    skills:"Cycle MP"
  },
  {
    className:"vertical-timeline-element--education",
    contentStyle:{ background: '#f50b86', color: '#fff' },
    contentArrowStyle:{ borderRight: '7px solid  #f50b86' },
    date:"2016 - 2020",
    iconStyle:{background: '#f50b86', color: '#fff' },
    icon:"<SchoolIcon/>",
    title:"Baccalauréat en enseignement secondaire",
    subtitle:"Lycée Pilote Borguiba Tunis",
    skills:"Bac Math"
  },
];
export const cards=[
  {
    titre:"Web development",
    skills:[{id:'HTML',color:"#5CF5FF"},{id:'CSS',color:"#5CF5FF"},{id:'JavaScript',color:"#5CF5FF"},{id:'ReactJS',color:"#5CF5FF"},{id:'NodeJS',color:"#5CF5FF"},{id:'Tailwind',color:"#5CF5FF"},{id:'Spring Boot',color:"#5CF5FF"}],
    image:webdev    },
    {
      titre:"Programming languages",
      skills:[{id:'C',color:'#C2FFDE'},{id:'C++',color:"#C2FFDE"},{id:'Java',color:"#C2FFDE"},{id:'Python',color:"#C2FFDE"},{id:'JavaScript',color:"#C2FFDE"}],
      image:prog    },
    {
      titre:"Cyber Security",
      skills:[{id:'Network Security',color:"#5CF5FF"},{id:'Risk Analysis',color:"#FFF2C2"},{id:'Cryptography',color:"#FFF2C2"},{id:'System Administration',color:"#FFF2C2"}],
      image:sec    },    
    {
      titre:"Databases",
      skills:[{id:'SQL',color:"#5CF5FF"},{id:'PostgresSQL',color:"#5CF5FF"},{id:'PLSQL',color:"#5CF5FF"},{id:'MySQL',color:"#5CF5FF"},{id:'Oracle',color:"#5CF5FF"},{id:'MangoDB',color:"#5CF5FF"}],
      image:data    },
    {
      titre:"Data Science",
      skills:[{id:'Pandas',color:"#5CF5FF"},{id:'SciPy',color:"#5CF5FF"},{id:'ML algorithms',color:"#5CF5FF"},{id:'Matplotlib',color:"#5CF5FF"}],
      image:dscience    },
      {
        titre:"Other",
        skills:[{id:'Prpblem Solving',color:"#5CF5FF"},{id:'UML',color:"#5CF5FF"},{id:'ERP',color:"#5CF5FF"},{id:'Git',color:"#5CF5FF"},{id:'Management',color:"#5CF5FF"},{id:'Agile Methods',color:"#5CF5FF"}],
        image:other    },
    ];
    export const prjs = [
      {
        title:"ZenFlow",
        img:java,
        techs:[{id:'JAVA'},{id:'JavaFX'},{id:'Scene builder'}],
        description:"L'application de santé mentale que nous développons vise à simplifier l'amélioration du bien-être mental quotidien. Elle offre une approche holistique en intégrant une bibliothèque de livres inspirants, de la musique apaisante, des vidéos instructives, et des conseils pratiques sur la gestion du stress, l'activité physique, et l'alimentation équilibrée. De plus, l'application permet des consultations en ligne avec des psychologues et des coachs de vie, offrant ainsi un soutien professionnel direct.",
      },
      {
        title:"Tunisia's Pet Association WebSite",
        img:other,
        techs:[{id:'HTML'},{id:'CSS'},{id:'Javascript'},{id:'MySQL'},{id:'PHP'}],
        description:"This website for the Pet Association of Tunisia, built with HTML, CSS, JavaScript, and PHP, offers an intuitive interface for pet adoption, events, education, and community forums. JavaScript adds dynamic elements for enhanced user experience, while PHP handles server-side processing and database interactions. The site promotes pet adoption and community engagement across Tunisia"
      }
    ];
