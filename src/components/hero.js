

export default function Hero(){
    const hero = document.getElementById('hero-root')
    if (hero){
        hero.innerHTML = `
            <!-- HERO SECTION -->
  <section class="relative min-h-screen pt-32 pb-20 flex items-center border-b border-zinc-800/40 overflow-hidden">
    <!-- Grid Geométrico Suave de Fundo -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
      
      <!-- Lado Esquerdo: Conteúdo Editorial / Headline -->
      <div class="lg:col-span-7 space-y-8">
        
        <!-- Headline Principal -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase leading-[1.1]">
          Crafting robust backends, data pipelines, and scalable systems.
        </h1>

        <!-- Descrição -->
        <p class="text-zinc-400 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
          Software Engineer dedicated to building efficient, reliable, and performance-oriented technical solutions.
        </p>

        <!-- Chamadas para Ação (CTAs) -->
        <div class="flex flex-wrap items-center gap-4 pt-2">
          <a href="#projects" class="px-6 py-3 bg-accent hover:bg-cyan-400 text-black font-semibold text-xs uppercase tracking-wider rounded-sm transition-all duration-200 shadow-[0_0_20px_rgba(0,229,255,0.2)]">
            Explore Projects
          </a>
          <a href="#contact" class="px-6 py-3 bg-transparent border border-zinc-700 hover:border-zinc-400 text-zinc-300 font-semibold text-xs uppercase tracking-wider rounded-sm transition-all duration-200">
            Get In Touch
          </a>
        </div>
      </div>

      <!-- Lado Direito: Ilustração Técnica Abstrata e Isométrica (Arquitetura & Data) -->
      <div class="lg:col-span-5 relative flex justify-center items-center">
        <div class="relative w-full max-w-md aspect-square flex items-center justify-center">
          
          <!-- Elemento de Arquitetura Isométrica em SVG -->
          <svg viewBox="0 0 500 500" class="w-full h-full drop-shadow-2xl" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Servidores / Blocos Isométricos -->
            <g transform="translate(180, 80)">
              <!-- Servidor 1 (Topo) -->
              <path d="M70 0 L140 35 L70 70 L0 35 Z" fill="#2a303c" stroke="#4b5563" stroke-width="1.5"/>
              <path d="M0 35 L70 70 L70 110 L0 75 Z" fill="#181c24" stroke="#4b5563" stroke-width="1.5"/>
              <path d="M140 35 L70 70 L70 110 L140 75 Z" fill="#1f242d" stroke="#4b5563" stroke-width="1.5"/>
              <!-- Indicadores LED -->
              <circle cx="20" cy="55" r="2" fill="#00e5ff"/>
              <circle cx="30" cy="60" r="2" fill="#00e5ff"/>

              <!-- Servidor 2 (Meio) -->
              <g transform="translate(0, 50)">
                <path d="M70 0 L140 35 L70 70 L0 35 Z" fill="#2a303c" stroke="#4b5563" stroke-width="1.5"/>
                <path d="M0 35 L70 70 L70 110 L0 75 Z" fill="#181c24" stroke="#4b5563" stroke-width="1.5"/>
                <path d="M140 35 L70 70 L70 110 L140 75 Z" fill="#1f242d" stroke="#4b5563" stroke-width="1.5"/>
                <circle cx="20" cy="55" r="2" fill="#00e5ff"/>
              </g>

              <!-- Servidor 3 (Base) -->
              <g transform="translate(0, 100)">
                <path d="M70 0 L140 35 L70 70 L0 35 Z" fill="#2a303c" stroke="#4b5563" stroke-width="1.5"/>
                <path d="M0 35 L70 70 L70 110 L0 75 Z" fill="#181c24" stroke="#4b5563" stroke-width="1.5"/>
                <path d="M140 35 L70 70 L70 110 L140 75 Z" fill="#1f242d" stroke="#4b5563" stroke-width="1.5"/>
              </g>
            </g>

            <!-- Banco de Dados Cilindro (Esquerda) -->
            <g transform="translate(60, 220)">
              <ellipse cx="40" cy="20" rx="40" ry="18" fill="#2a303c" stroke="#4b5563" stroke-width="1.5"/>
              <path d="M0 20 V60 A40 18 0 0 0 80 60 V20" fill="#181c24" stroke="#4b5563" stroke-width="1.5"/>
              <path d="M0 60 V100 A40 18 0 0 0 80 100 V60" fill="#1f242d" stroke="#4b5563" stroke-width="1.5"/>
            </g>

            <!-- Conexões e Linhas de Pipeline -->
            <path d="M100 240 L180 190" stroke="#00e5ff" stroke-width="2" stroke-dasharray="4 4"/>
            <path d="M250 290 L330 340" stroke="#4b5563" stroke-width="1.5"/>
            
            <!-- Badge / Nó de API -->
            <g transform="translate(140, 150)">
              <rect x="0" y="0" width="50" height="24" rx="12" fill="#181c24" stroke="#00e5ff" stroke-width="1.5"/>
              <text x="25" y="15" fill="#00e5ff" font-family="JetBrains Mono" font-size="10" font-weight="bold" text-anchor="middle">APIs</text>
            </g>

            <!-- Nós adicionais em Isometria (Direita/Base) -->
            <g transform="translate(300, 260)">
              <path d="M40 0 L80 20 L40 40 L0 20 Z" fill="#2a303c" stroke="#4b5563" stroke-width="1.5"/>
              <path d="M0 20 L40 40 L40 65 L0 45 Z" fill="#181c24" stroke="#4b5563" stroke-width="1.5"/>
              <path d="M80 20 L40 40 L40 65 L80 45 Z" fill="#1f242d" stroke="#4b5563" stroke-width="1.5"/>
            </g>
          </svg>
        </div>
      </div>

    </div>
  </section>
        `;
    }
}