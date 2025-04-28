import "./style.css"

document.getElementById("app")!.innerHTML = `
    <div class="min-h-screen bg-black text-white font-montserrat flex flex-col">
        <header class="container mx-auto relative md:flex justify-between items-center top-8 md:h-34">
            <h1 class="hidden md:block">Agence2Voyage</h1>
            <img alt="Logo" class="w-22 md:w-33 mx-auto md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2"
                 src="/images/logo.png">
        
            <!--Menu PC-->
            <nav class="hidden md:flex gap-10 text-xl">
                <a href="../index.html">Welcome</a>
                <a href="#destinations">Destinations</a>
                <a href="">Contact</a>
            </nav>
        
            <!--Menu burger-->
            <button class="md:hidden absolute top-1/2 right-10 -translate-y-1/2" id="burger">
                <svg class="fill-white w-15" id="fi_5358649"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="m3.5 7.5h17c.8286133 0 1.5-.6713867 1.5-1.5s-.6713867-1.5-1.5-1.5h-17c-.8286133 0-1.5.6713867-1.5 1.5s.6713867 1.5 1.5 1.5z"></path>
                        <path d="m20.5 10.5h-17c-.8286133 0-1.5.6713867-1.5 1.5s.6713867 1.5 1.5 1.5h17c.8286133 0 1.5-.6713867 1.5-1.5s-.6713867-1.5-1.5-1.5z"></path>
                        <path d="m20.5 16.5h-17c-.8286133 0-1.5.6713867-1.5 1.5s.6713867 1.5 1.5 1.5h17c.8286133 0 1.5-.6713867 1.5-1.5s-.6713867-1.5-1.5-1.5z"></path>
                    </g>
                </svg>
            </button>
        
            <!--Menu mobile-->
            <nav class="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-black hidden" id="phone-menu">
                <button class="absolute right-10 top-15" id="close">
                    <img alt="Cross Icon" class="w-15" src="/images/cross.svg"/>
                </button>
            </nav>
        </header>
        <main class="container mx-auto grow">
            <section id="destinations" class="mt-40">
                <div class="flex flex-wrap justify-between pb-20">
                    <img src="/images/Tibet/Tibet%201.png" class="mx-auto md:m-0" alt="Tibet">
                    <div class="flex flex-col text-center pt-5  md:pt-0">
                        <p>Destination 1</p>
                        <p class="text-2xl flex items-center justify-center grow">Nous pouvons par exemple proposer une destination au Tibet</p>
                    </div>
                </div>
                <div class="mb-20">
                    <img src="/images/Seychelles/Seychelles%201.png" alt="Seychelles" class="mx-auto md:m-0">
                </div>
            </section>
        </main>
    </div>
`

const burger = document.getElementById("burger") as HTMLButtonElement;

const phoneMenu = document.getElementById("phone-menu") as HTMLDivElement;

const cross = document.getElementById("close") as HTMLButtonElement;

// Bouton pour ouvrir le menu
burger.addEventListener("click", () => {
    phoneMenu.classList.remove("hidden");
})

// Bouton pour fermer le menu
cross.addEventListener("click", () => {
    phoneMenu.classList.add("hidden")
})