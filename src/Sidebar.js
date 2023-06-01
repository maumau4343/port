import SocialNetworks from './SocialNetworks';

import Avatar from './img/maumau.jpg'

import Information from './information';
     


import './styles/Sidebar.css';


const Sidebar = () => {
    return(
    <aside className="sidebar">
        <img src={Avatar} alt="Maurício Maia"/>
        <p className="title">Desenvolvedor</p>
        <SocialNetworks />
        <Information />
        <a href="" className="btn">
            Download curriculo
        </a>
    </aside>
    )
}
export default Sidebar