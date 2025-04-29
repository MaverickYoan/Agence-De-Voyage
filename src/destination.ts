import "./style.css"

document.getElementById("app")!.innerHTML = `
    <div class="min-h-screen bg-black text-white font-montserrat flex flex-col">
        <header class="container mx-auto relative md:flex justify-between items-center top-8">
            <h1 class="hidden md:block md:py-0">Agence2Voyage</h1>
            <img alt="Logo" class="w-12.5 mx-auto rounded-full"
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
            <nav class="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-black hidden z-50" id="phone-menu">
                <button class="absolute right-10 top-15" id="close">
                    <img alt="Cross Icon" class="w-15" src="/images/cross.svg"/>
                </button>
            </nav>
        </header>
        <main class="container mx-auto grow">
            <section class="mt-40" id="destinations">
                <!-- Tibet -->
                <div class="grid md:grid-cols-2 gap-10 justify-between pb-20">
                    <!-- Carousel Tibet -->
                    <div class="relative w-full" data-carousel="slide" id="tibet">
                        <!-- Carousel wrapper-->
                        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                            <!-- Item 1 -->
                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="/images/Tibet/Tibet%20(1).jpg" alt="Tibet (1)" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            </div>
                            <!-- Item 2 -->
                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="/images/Tibet/Tibet%20(2).jpg" alt="Tibet (2)" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            </div>
                            <!-- Item 3 -->
                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="/images/Tibet/Tibet%20(3).jpg" alt="Tibet (3)" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            </div>
                            <!-- Item 4 -->
                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="/images/Tibet/Tibet%20(4).jpg" alt="Tibet (4)" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            </div>
                        </div>
                        <!-- Slider indicators -->
                        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                            <button aria-current="true" aria-label="Slide 1" class="w-3 h-3 rounded-full" data-carousel-slide-to="0" type="button"></button>
                            <button aria-current="false" aria-label="Slide 2" class="w-3 h-3 rounded-full" data-carousel-slide-to="0" type="button"></button>
                            <button aria-current="false" aria-label="Slide 3" class="w-3 h-3 rounded-full" data-carousel-slide-to="0" type="button"></button>
                            <button aria-current="false" aria-label="Slide 3" class="w-3 h-3 rounded-full" data-carousel-slide-to="0" type="button"></button>
                        </div>
                        <!-- Slider controls -->
                        <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                                </svg>
                                <span class="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                                </svg>
                                <span class="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
                    <div class="flex flex-col text-center pt-5 md:pt-0">
                        <p>Destination 1</p>
                        <p class="text-2xl flex items-center justify-center grow">Nous pouvons par exemple proposer une destination au Tibet</p>
                    </div>
                </div>
                <!-- Seychelles -->
                <div class="mb-20 grid md:grid-cols-2 gap-10">
                    <!-- Carousel Seychelles -->
                    <div class="relative w-full" data-carousel="slide" id="seychelles">
                        <!-- Carousel wrapper -->
                        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                             <!-- Item 1 -->
                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img alt="Seychelles (1)" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src="/images/Seychelles/Seychelles%20(1).jpg">
                            </div>
                            <!-- Item 2 -->
                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img alt="Seychelles (2)" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src="/images/Seychelles/Seychelles%20(2).jpg">
                            </div>
                            <!-- Item 3 -->
                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img alt="Seychelles (3)" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src="/images/Seychelles/Seychelles%20(3).jpg">
                            </div>
                            <!-- Item 4 -->
                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="/images/Seychelles/Seychelles%20(4).jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Seychelles (4)">
                            </div>
                        </div>
                        <!-- Slider indicators -->
                        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                            <button aria-current="true" aria-label="Slide 1" class="w-3 h-3 rounded-full" data-carousel-slide-to="0" type="button"></button>
                            <button aria-current="false" aria-label="Slide 2" class="w-3 h-3 rounded-full" data-carousel-slide-to="1" type="button"></button>
                            <button aria-current="false" aria-label="Slide 3" class="w-3 h-3 rounded-full" data-carousel-slide-to="2" type="button"></button>
                            <button aria-current="false" aria-label="Slide 4" class="w-3 h-3 rounded-full" data-carousel-slide-to="3" type="button"></button>
                        </div>
                        <!-- Slider controls -->
                        <button class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev type="button">
                            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg aria-hidden="true" class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" fill="none" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 1 1 5l4 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                </svg>
                                <span class="sr-only">Previous</span>
                            </span>
                        </button>
                        <button class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next type="button">
                            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg aria-hidden="true" class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" fill="none" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m1 9 4-4-4-4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                </svg>
                                <span class="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
                    <div class="flex flex-col text-center ">
                        <p>Destination 2</p>
                        <p class="text-2xl flex items-center justify-center grow">Autre destination disponible : Les seychelles</p>
                    </div>
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