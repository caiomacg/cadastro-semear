import './Footer.css'


import { InstagramOutlined, FacebookOutlined, LinkedinOutlined, YoutubeOutlined } from '@ant-design/icons';

function Footer () {

  

    return (
        <div className='container_footer'>

            <div className='logo_footer'>
                <img src='https://www.isemear.org.br/wp-content/uploads/2022/12/logo-white.png' alt='Logo do Semear'></img>
            </div>

            <div className='redes_sociais'>
                <div className='insta'>
                    <a href='#'> <InstagramOutlined /> </a>
                </div>
                <div className='face'>
                    <a href='#'> <FacebookOutlined /> </a>
                </div>
                <div className='linkedin'>
                    <a href='#'> <LinkedinOutlined /> </a>
                </div>
                <div className='youtube'>
                    <a href='#'> <YoutubeOutlined /> </a>
                </div>
            </div>

           

            <div className='tags_footer'>

                <div className='politica'>
                    <a href='#'>Política de Privacidade</a>
                </div>
                
                <div className='termo'>
                    <a href='#'>Termo de Uso</a>
                </div>

                <div className='ajuda'>
                    <a href='#'>Ajuda</a>
                </div>
            </div>
        </div>
    )
}


export default Footer;