import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <nav class="navbar">
        <!-- <button class="btntest">bouton</button> -->

        <div class="hamburger-menu" id="hamburgerMenu">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <ul class="nav-links" id="navLinks">
            <li><a href="#about">à propos</a></li>
            <li><a href="../destination.html">Destination</a></li>
            <li><a href="#reservation">Réservation</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <!-- * home section -->

    <section class="home"><!-- home / h1 / id home / img -->
        <h1 id="home">Agence2Voyages</h1>
        <img class="logo" src="/images/logo.png" width="50px"
            alt="voilier bleu">
    </section>


    <!-- * reservation section -->

    <section class="reservation"><!-- reservation / h1 / id reservation / img -->
        <h1 id="reservation">reservation</h1>
        <img src="" alt="">
    </section>

    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

    <!-- * animation plane -->

    <style type="text/css">
        .home {
            background: url(/images/sky.jpg) no-repeat;
            background-size: cover;
            overflow: hidden;
        }

        .sky {
            position: absolute;
            top: 30%;
            right: -50px;
            animation: sky 7s linear 0s infinite reverse;
            z-index: 99;
        }

        .sky img {
            width: 50px;
        }

        @keyframes sky {
            from {
                top: 50px;
                right: -40px;
            }

            to {
                top: 300px;
                right: 100%;
            }
        }
    </style>

    <div class="sky">
        <img src="/images/plane.png">
    </div>

    <!-- * contact section -->

    <section class="contact"><!-- contact / h1 / id contact / img -->
        <h1 id="contact">contact</h1>
        <img src="" alt="">
    </section>


    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>


    <!-- * FOOTER -->

    <footer><!-- * droits / h6 -->
        <div class="droits">
            <h6>&copy; 2025 Projet_3. Tous droits réservés. @onlineformapro
                <br>Mentions légales | Politique de confidentialité | Conditions générales de vente<br>
            </h6>
            <a class="agrees" href="" target="_blank">
            </a>
        </div>

    </footer>



    <!-- * a / p / svg -->
    <button class="back-to-top"><!-- back-to-top -->
        <!-- aria-hidden="true" opur masquer l'icon de l'écran -->
        <svg width="18" height="18" viewbox=" 0 0 24 24" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m12 4 7 7-7 7" />
        </svg>
    </button>
`

document.addEventListener('DOMContentLoaded', () => {

    const burger = document.getElementById('hamburgerMenu') as HTMLDivElement;
    const links = document.getElementById('navLinks') as HTMLUListElement
    burger.addEventListener('click', function () {
        this.classList.toggle('active');
        links.classList.toggle('active');
    });

    const top = document.querySelector('.back-to-top') as HTMLButtonElement;

    top.addEventListener("click", function () {
        window.scrollTo(0, 0);
    });
});
