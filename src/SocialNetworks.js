import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa';
import './styles/SocialNetworks.css';

const socialNetworks = [
    { name: "linkedin", href:"https://www.linkedin.com/in/maurício-maia-02899a259/", icon: <FaLinkedinIn className= "linkedin"/> },
    { name: "github", href:"https://github.com/maumau4343/Maumau-repository", icon: <FaGithub className= "github"/> },
    { name: "instagram",href:"https://www.instagram.com/mauriciomaia27/", icon: <FaInstagram className= "instagram"/> },
]


const SocialNetworks = () => {
    return(
        <section className='social-networks'>
            {socialNetworks.map((network) => (
                <a href={network.href} className="social-btn" id='network.name' key={network.name}>
                    {network.icon}
                </a>
            ))}
        </section>
    ) 
}
export default SocialNetworks