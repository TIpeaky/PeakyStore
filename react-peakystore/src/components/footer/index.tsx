import Styles from './Footer.module.scss';
import { SvgIcon } from '@mui/material';


const Footer = () => {
    return (
        <footer className={Styles.footer}>
            <div className={Styles.div}>
                <p className={Styles.ofertas}>Receba as nossas ofertas:</p>
                <input type="email" placeholder='Email' />
                <button>Ok</button>
                <br/>
                <span className={Styles.redes}>Redes sociais</span>
                <br/>
                <div className={Styles.icons}>
                    <SvgIcon fontSize="large" width="94" height="96" viewBox="0 0 94 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M58.7225 33.5399C55.7517 33.5294 52.8081 34.1225 50.06 35.2851C47.3119 36.4478 44.8133 38.1572 42.7072 40.3157C40.6012 42.4741 38.9289 45.0392 37.7861 47.8641C36.6434 50.6889 36.0526 53.7182 36.0475 56.7786V80.2568C36.0475 81.2099 36.415 82.124 37.0692 82.7979C37.7235 83.4718 38.6108 83.8504 39.536 83.8504H47.6757C48.6009 83.8504 49.4882 83.4718 50.1424 82.7979C50.7967 82.124 51.1642 81.2099 51.1642 80.2568V56.7786C51.1634 55.6901 51.3853 54.6137 51.8155 53.6195C52.2456 52.6254 52.8743 51.7357 53.6606 51.0086C54.4469 50.2815 55.3731 49.7333 56.3789 49.3997C57.3846 49.066 58.4473 48.9545 59.4978 49.0723C61.3816 49.3167 63.1128 50.2648 64.3631 51.7368C65.6134 53.2088 66.2958 55.1023 66.2809 57.0581V80.2568C66.2809 81.2099 66.6484 82.124 67.3026 82.7979C67.9569 83.4718 68.8442 83.8504 69.7694 83.8504H77.9091C78.8343 83.8504 79.7216 83.4718 80.3758 82.7979C81.0301 82.124 81.3976 81.2099 81.3976 80.2568V56.7786C81.3925 53.7182 80.8017 50.6889 79.6589 47.8641C78.5162 45.0392 76.8439 42.4741 74.7378 40.3157C72.6317 38.1572 70.1332 36.4478 67.3851 35.2851C64.637 34.1225 61.6933 33.5294 58.7225 33.5399Z" fill="#D9D9D9"/>
                        <path d="M25.5821 37.1343H15.1167C13.1901 37.1343 11.6282 38.7432 11.6282 40.7279V80.2576C11.6282 82.2423 13.1901 83.8512 15.1167 83.8512H25.5821C27.5087 83.8512 29.0706 82.2423 29.0706 80.2576V40.7279C29.0706 38.7432 27.5087 37.1343 25.5821 37.1343Z" fill="#D9D9D9"/>
                        <path d="M20.3494 29.9468C25.166 29.9468 29.0706 25.9245 29.0706 20.9628C29.0706 16.001 25.166 11.9788 20.3494 11.9788C15.5328 11.9788 11.6282 16.001 11.6282 20.9628C11.6282 25.9245 15.5328 29.9468 20.3494 29.9468Z" fill="#D9D9D9"/>
                    </SvgIcon>
                    <SvgIcon fontSize="large" width="97" height="96" viewBox="0 0 97 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M84.2027 33.4906C84.1625 30.4741 83.5979 27.4877 82.5339 24.6648C81.6113 22.2837 80.2022 20.1213 78.3965 18.3156C76.5909 16.5099 74.4284 15.1008 72.0473 14.1782C69.2608 13.1321 66.3169 12.5665 63.341 12.5054C59.5096 12.3342 58.2949 12.2864 48.569 12.2864C38.8431 12.2864 37.5965 12.2864 33.7929 12.5054C30.8185 12.567 27.876 13.1326 25.0906 14.1782C22.7092 15.1002 20.5464 16.5091 18.7406 18.3148C16.9349 20.1205 15.526 22.2833 14.604 24.6648C13.5559 27.4493 12.9915 30.3924 12.9352 33.3671C12.764 37.2025 12.7122 38.4173 12.7122 48.1432C12.7122 57.8691 12.7122 59.1117 12.9352 62.9192C12.995 65.8983 13.5566 68.8376 14.604 71.6295C15.5275 74.0102 16.9375 76.1721 18.7438 77.9771C20.5502 79.7821 22.7132 81.1904 25.0946 82.1121C27.8723 83.2002 30.8153 83.8063 33.7969 83.9043C37.6323 84.0756 38.8471 84.1274 48.573 84.1274C58.2989 84.1274 59.5455 84.1274 63.349 83.9043C66.3247 83.8457 69.2688 83.2814 72.0553 82.2356C74.4358 81.3119 76.5977 79.9024 78.4032 78.0969C80.2087 76.2913 81.6182 74.1294 82.5419 71.749C83.5894 68.961 84.1509 66.0218 84.2107 63.0387C84.3819 59.2073 84.4337 57.9925 84.4337 48.2626C84.4258 38.5367 84.4258 37.3021 84.2027 33.4906ZM48.5451 66.5355C38.3731 66.5355 30.1328 58.2952 30.1328 48.1232C30.1328 37.9513 38.3731 29.7109 48.5451 29.7109C53.4283 29.7109 58.1116 31.6508 61.5645 35.1038C65.0175 38.5568 66.9574 43.24 66.9574 48.1232C66.9574 53.0065 65.0175 57.6897 61.5645 61.1427C58.1116 64.5957 53.4283 66.5355 48.5451 66.5355ZM67.6902 33.3233C67.1262 33.3238 66.5677 33.2131 66.0466 32.9976C65.5254 32.782 65.0519 32.4657 64.6531 32.067C64.2544 31.6682 63.9381 31.1947 63.7225 30.6735C63.507 30.1524 63.3963 29.5939 63.3968 29.0299C63.3968 28.4663 63.5078 27.9083 63.7235 27.3876C63.9391 26.867 64.2552 26.3939 64.6537 25.9954C65.0522 25.5969 65.5253 25.2808 66.046 25.0651C66.5666 24.8495 67.1247 24.7385 67.6882 24.7385C68.2518 24.7385 68.8098 24.8495 69.3305 25.0651C69.8511 25.2808 70.3242 25.5969 70.7227 25.9954C71.1212 26.3939 71.4373 26.867 71.653 27.3876C71.8686 27.9083 71.9796 28.4663 71.9796 29.0299C71.9796 31.4036 70.06 33.3233 67.6902 33.3233Z" fill="#D9D9D9"/>
                        <path d="M48.5451 60.0835C55.1505 60.0835 60.5053 54.7288 60.5053 48.1233C60.5053 41.5179 55.1505 36.1631 48.5451 36.1631C41.9396 36.1631 36.5849 41.5179 36.5849 48.1233C36.5849 54.7288 41.9396 60.0835 48.5451 60.0835Z" fill="#D9D9D9"/>
                    </SvgIcon>
                    <SvgIcon fontSize="large" width="91" height="68" viewBox="0 0 91 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M90.1379 7.95515C89.536 9.1075 88.4155 10.5631 86.7767 12.3218C85.138 14.0805 83.1146 15.6271 80.7065 16.9613C80.7734 17.4466 80.8236 17.9014 80.857 18.3259C81.1167 24.8622 79.3899 31.6438 76.9941 37.2936C72.3503 47.798 65.2345 56.252 55.071 61.9924C44.4725 67.5044 32.1291 68.6768 20.7566 67.6781C13.2067 66.892 5.76541 64.6566 0.137939 60.4459C10.4304 61.5614 20.0358 58.3868 27.6296 53.259C19.1942 53.4526 13.0652 47.92 10.1714 41.5237C11.4759 41.8337 12.8405 41.7963 14.0845 41.7057C15.6157 41.5753 17.0692 41.4451 18.4992 41.1599C13.1204 39.5864 8.41404 36.6939 5.95741 32.3356C4.51644 29.574 3.86581 26.9443 3.85044 23.9662C6.37081 25.1693 9.40254 26.3419 12.1782 26.2404C7.98632 23.0207 4.62571 18.906 4.00096 14.1866C3.60654 10.2516 4.69254 6.65965 6.25854 3.31547C12.5291 9.56379 19.5647 14.7059 27.6799 17.871C33.2297 19.9316 38.7638 21.0335 44.486 21.055C43.8254 16.421 44.339 11.9394 46.7435 8.13692C49.5733 4.0488 53.7019 1.67691 58.3322 0.495249C64.9575 -1.04512 71.4194 1.13072 75.4895 5.31676C79.8785 4.88692 84.083 3.12147 87.4292 1.31399C86.0074 5.21795 83.2387 9.09961 79.2018 10.957C83.0453 10.3118 86.713 9.28016 90.1379 7.95515Z" fill="#D9D9D9"/>
                    </SvgIcon>
                </div>
            </div>

            <div className={Styles.div}>
                <h2>Departamentos</h2>
                <div className={Styles.topicos}>
                    <p>Masculino</p>
                    <p>Feminino</p>
                    <p>Infantil</p>
                    <p>Jeans</p>
                    <p>Acessórios</p>
                </div>
            </div>

            <div className={Styles.div}>
                <h2>Atendimento ao cliente</h2>
                <div className={Styles.topicos}>
                    <p>Fale conosco</p>
                    <p>Meus pedidos</p>
                    <p>Formas de pagamento</p>
                    <p>Perguntas frequentes</p>
                </div>
            </div>

            <div className={Styles.footerBottom}>
                <p>© 2022 TIPeaky</p>
            </div>
        </footer>
    )
}

export default Footer;