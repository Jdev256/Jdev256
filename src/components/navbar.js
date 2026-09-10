


export default function Navbar(){
    const navbar = document.getElementById('navbar-root')
    if (navbar){
        navbar.innerHTML = `
            <header class="fixed top-0 left-0 w-full z-50 bg-darkbg/80 backdrop-blur-md border-b border-zinc-800/60">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <!-- Logo / Nome -->
      <a href="#" class="font-bold tracking-wider text-sm uppercase hover:text-accent transition-colors">
        ELIAS COSTA
      </a>

      <!-- Links de Navegação -->
      <nav class="hidden md:flex items-center space-x-8 text-xs tracking-wide text-zinc-400 font-medium">
        <a href="#about" class="hover:text-zinc-100 transition-colors">About</a>
        <a href="#skills" class="hover:text-zinc-100 transition-colors">Skills</a>
        <a href="#competencias" class="hover:text-zinc-100 transition-colors">Competências</a>
        <a href="#projects" class="hover:text-zinc-100 transition-colors">Projects</a>
        <a href="#contact" class="hover:text-zinc-100 transition-colors">Contact</a>
      </nav>
    </div>
  </header>
        `;
    }
}