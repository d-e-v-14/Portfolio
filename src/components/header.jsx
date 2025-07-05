import logo from '../assets/logo.png';
import HomeButton from '../utilities/homeButton';
import AboutButton from '../utilities/aboutButton';
import LabButton from '../utilities/labButton';

function Header() {
  return (
    <div className="relative bg-[#1A0B2E] w-full min-h-[10vh]">
      <img 
        src={logo} 
        alt="Logo" 
        className="absolute bottom-4 left-64 h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" 
      />
      <div className="absolute bottom-4 left-170">
        <HomeButton />
      </div>
      <div className="absolute bottom-4 left-210 ">
        <AboutButton />
      </div>
      <div className="absolute bottom-4 left-250">
        <LabButton />
      </div>
    </div>
  );
}

export default Header;
