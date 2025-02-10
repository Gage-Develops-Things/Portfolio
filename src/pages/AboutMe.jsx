import Gage from '../../static/Gage.JPG' 
export default function AboutMe() {
  return (
    <div class='mycard'>
      <h1 class='title'>About Me</h1>
      <img src = {Gage}></img>
      
      <p>Hello! My name is Gage, and I’m a (future) junior developer from rural Minnesota. 
      I hold degrees in Philosophy and Political Science from Concordia College in Moorhead, MN. 
      I earned my certification in Full-Stack Development from the U of M Twin Cities.
      I am proficient in HTML, CSS, and JavaScript and I have experience using Python, Express, SQL and React.</p>

      <p>Fitness is a significant part of my life, and I am a regular gym-goer. 
      The discipline and focus I gain from working out help me tackle challenges in my professional life. 
      Additionally, I’m a horror movie enthusiast, and some of my favorites include the Babadook and Hereditary.</p>

      <p>I’m eager to join a dynamic team where I can contribute my skills and passion for software development, 
      collaborate with talented professionals, and grow both personally and professionally. 
      Let’s connect and explore opportunities to work together!</p>
    </div>
  );
}
