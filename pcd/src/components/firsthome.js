import Typewriter from './typewriter';
import { Link } from 'react-router-dom';

function FirstHome() {
  const phrases = ['Welcome To DoctSmart !', 'KAFKA el haj', 'Ya weldi hbata zeyda aalkher !'];

  return (
    <div name="Home" className='home'>
      <div className='coleurbleu'>  </div>
      <Typewriter texts={phrases} />
      <div>
        <button class="custom-btn btn-3"> <Link to='/logincard' className='signtxt' > <span>Sign up</span></Link>   </button>
      </div>
    </div>
  );
}

export default FirstHome;