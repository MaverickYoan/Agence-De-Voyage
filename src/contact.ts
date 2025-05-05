import '../css/style-contact.css'

document.getElementById('app')!.innerHTML = `
    <nav class="navbar bg-[url('images/Tibet/Tibet (8).jpg')]">
        <!-- <button class="btntest">bouton</button> -->

        <div class="hamburger-menu" id="hamburgerMenu">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <ul class="nav-links" id="navLinks">
            <li><a href="../index.html">À propos</a></li>
            <li><a href="../destination.html">Destination</a></li>
            <li><a href="../contact.html">Contact</a></li>
        </ul>
    </nav>

    <!-- * animation plane -->

    <style>
        .home {
            background: url("/images/Tibet/Tibet (7).jpg");
            background-repeat: no-repeat;
            background-size: cover;
            overflow: hidden;
        }
    </style>


    <!-- * Contact section -->

    <section class="home"><!-- home / h1 / id home / img -->
        <h1 id="home">Agence2Voyages</h1>
        <img class="logo" src="/images/logo.png" width="50px" alt="voilier bleu">
    </section>


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

`