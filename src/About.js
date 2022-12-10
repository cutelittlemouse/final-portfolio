import './About.css';
import './fonts/PermanentMarker-Regular.ttf'

export default function About() {
  return (
    <div className="About-Box">
      <div className='Description'>
        <h1>Hi! I'm xxx</h1>
        <h3>
          <ul>
            <li>Sophomore at Brown Uniersity studying Computer Science and International Relations</li>
            <li>Enjoy travelling, drone photography, and film production</li>
            <li>Drone coordination, artificial intelligence</li>
            <li>Badminton</li>
            <li>Providence, RI | </li>

          </ul>
        </h3>

      </div>
      <div className='Image'>
        <img src="personalImage.jpg" alt="xxx" width={500} />
      </div>


    </div>
  );
}