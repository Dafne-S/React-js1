import "./Footer.css"

const Footer = () => {
    return(
        <div>
        <aside className="border"> 
        <ul className="condiciones">
            <li><a href="#"> Términos </a></li>
            <li><a href="#"> Condiciones </a></li>
            <li><a href="#"> Ayuda </a></li>
            <li><a href="#"> Privacidad </a></li>
            <li><a href="#"> Descarga </a></li>
            <p className="derechos1">Copyright © 2024 Drive Now Inc. Todos los derechos reservados.</p>
            <p className="derechos2">Argentina</p>
        </ul>
        </aside>
    </div>
    )
}
export default Footer;