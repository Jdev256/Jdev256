

export default function Content(){
    const container = document.getElementById('content-root')
    if(container){
        container.innerHTML = `
            <section id="about" class="py-24 border-b border-zinc-800/40">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex items-center justify-between mb-12">
        <h2 class="text-3xl font-bold tracking-tight text-white uppercase">About</h2>
        <span class="text-xs font-mono text-zinc-500">01 / OVERVIEW</span>
      </div>

      <p class="text-zinc-400 text-base max-w-3xl leading-relaxed mb-16">
        Software Engineer dedicated to building efficient, reliable, and performance-oriented technical solutions, crafting clean architectures, highly-scalable backend integrations, and reliable data pipelines.
      </p>

      <!-- Grid Editorial de Destaques -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Card 1 -->
        <div class="p-8 bg-darkcard/50 border border-zinc-800/80 rounded-sm space-y-4 hover:border-zinc-700 transition-colors">
          <div class="text-accent font-mono text-xs">// CORE FOCUS</div>
          <h3 class="text-xl font-bold text-white">Software Engineering</h3>
          <p class="text-zinc-400 text-xs leading-relaxed">
            Desenvolvimento pautado em arquitetura limpa, código sustentável, princípios SOLID e padrões de projeto robustos.
          </p>
        </div>

        <!-- Card 2 -->
        <div class="p-8 bg-darkcard/50 border border-zinc-800/80 rounded-sm space-y-4 hover:border-zinc-700 transition-colors">
          <div class="text-accent font-mono text-xs">// ARCHITECTURE</div>
          <h3 class="text-xl font-bold text-white">Backend & APIs</h3>
          <p class="text-zinc-400 text-xs leading-relaxed">
            Construção de microsserviços e APIs RESTful de alta performance, desacoplamento de dependências e segurança.
          </p>
        </div>

        <!-- Card 3 -->
        <div class="p-8 bg-darkcard/50 border border-zinc-800/80 rounded-sm space-y-4 hover:border-zinc-700 transition-colors">
          <div class="text-accent font-mono text-xs">// DATA PIPELINES</div>
          <h3 class="text-xl font-bold text-white">Data & Systems</h3>
          <p class="text-zinc-400 text-xs leading-relaxed">
            Processamento massivo de dados, automação ETL, otimização de consultas e integração contínua de sistemas complexos.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION: SKILLS -->
  <section id="skills" class="py-24 border-b border-zinc-800/40 bg-zinc-950/30">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex items-center justify-between mb-12">
        <h2 class="text-3xl font-bold tracking-tight text-white uppercase">Skills</h2>
        <span class="text-xs font-mono text-zinc-500">02 / STACK & TOOLS</span>
      </div>

      <!-- Badges / Tags Organizadas -->
      <div class="flex flex-wrap gap-3 max-w-4xl">
        <span class="px-4 py-2.5 bg-darkcard border border-zinc-800 text-zinc-200 text-xs font-mono rounded-sm flex items-center gap-2 hover:border-accent hover:text-accent transition-all cursor-default">
          <span class="w-1.5 h-1.5 rounded-full bg-accent"></span> Python
        </span>
        <span class="px-4 py-2.5 bg-darkcard border border-zinc-800 text-zinc-200 text-xs font-mono rounded-sm flex items-center gap-2 hover:border-accent hover:text-accent transition-all cursor-default">
          <span class="w-1.5 h-1.5 rounded-full bg-accent"></span> FastAPI
        </span>
        <span class="px-4 py-2.5 bg-darkcard border border-zinc-800 text-zinc-200 text-xs font-mono rounded-sm hover:border-zinc-600 transition-all cursor-default">Node.js</span>
        <span class="px-4 py-2.5 bg-darkcard border border-zinc-800 text-zinc-200 text-xs font-mono rounded-sm hover:border-zinc-600 transition-all cursor-default">Fastify</span>
        <span class="px-4 py-2.5 bg-darkcard border border-zinc-800 text-zinc-200 text-xs font-mono rounded-sm hover:border-zinc-600 transition-all cursor-default">Java</span>
        <span class="px-4 py-2.5 bg-darkcard border border-zinc-800 text-zinc-200 text-xs font-mono rounded-sm hover:border-zinc-600 transition-all cursor-default">Spring</span>
        <span class="px-4 py-2.5 bg-darkcard border border-zinc-800 text-zinc-200 text-xs font-mono rounded-sm hover:border-zinc-600 transition-all cursor-default">JavaScript</span>
        <span class="px-4 py-2.5 bg-darkcard border border-zinc-800 text-zinc-200 text-xs font-mono rounded-sm hover:border-zinc-600 transition-all cursor-default">React</span>
        <span class="px-4 py-2.5 bg-darkcard border border-zinc-800 text-zinc-200 text-xs font-mono rounded-sm hover:border-zinc-600 transition-all cursor-default">Tailwind</span>
        <span class="px-4 py-2.5 bg-darkcard border border-zinc-800 text-zinc-200 text-xs font-mono rounded-sm flex items-center gap-2 hover:border-accent hover:text-accent transition-all cursor-default">
          <span class="w-1.5 h-1.5 rounded-full bg-accent"></span> PostgreSQL
        </span>
        <span class="px-4 py-2.5 bg-darkcard border border-zinc-800 text-zinc-200 text-xs font-mono rounded-sm hover:border-zinc-600 transition-all cursor-default">SQLAlchemy</span>
        <span class="px-4 py-2.5 bg-darkcard border border-zinc-800 text-zinc-200 text-xs font-mono rounded-sm hover:border-zinc-600 transition-all cursor-default">Alembic</span>
        <span class="px-4 py-2.5 bg-darkcard border border-zinc-800 text-zinc-200 text-xs font-mono rounded-sm hover:border-zinc-600 transition-all cursor-default">SQL</span>
        <span class="px-4 py-2.5 bg-darkcard border border-zinc-800 text-zinc-200 text-xs font-mono rounded-sm flex items-center gap-2 hover:border-accent hover:text-accent transition-all cursor-default">
          <span class="w-1.5 h-1.5 rounded-full bg-accent"></span> Polars
        </span>
        <span class="px-4 py-2.5 bg-darkcard border border-zinc-800 text-zinc-200 text-xs font-mono rounded-sm hover:border-zinc-600 transition-all cursor-default">ETL</span>
        <span class="px-4 py-2.5 bg-darkcard border border-zinc-800 text-zinc-200 text-xs font-mono rounded-sm hover:border-zinc-600 transition-all cursor-default">Git</span>
        <span class="px-4 py-2.5 bg-darkcard border border-zinc-800 text-zinc-200 text-xs font-mono rounded-sm hover:border-zinc-600 transition-all cursor-default">Docker</span>
        <span class="px-4 py-2.5 bg-darkcard border border-zinc-800 text-zinc-200 text-xs font-mono rounded-sm hover:border-zinc-600 transition-all cursor-default">Cloud</span>
      </div>
    </div>
  </section>

  <!-- SECTION: COMPETÊNCIAS -->
  <section id="competencias" class="py-24 border-b border-zinc-800/40">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex items-center justify-between mb-12">
        <h2 class="text-3xl font-bold tracking-tight text-white uppercase">Competências</h2>
        <span class="text-xs font-mono text-zinc-500">03 / SPECIALIZATIONS</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-8 bg-darkcard/30 border border-zinc-800/80 rounded-sm">
          <h3 class="text-lg font-bold text-white mb-2">API & Backend Development</h3>
          <p class="text-zinc-400 text-xs leading-relaxed">
            Projeto e implementação de serviços eficientes, autenticação segura, middlewares e estruturas de dados de alta throughput.
          </p>
        </div>

        <div class="p-8 bg-darkcard/30 border border-zinc-800/80 rounded-sm">
          <h3 class="text-lg font-bold text-white mb-2">Data Engineering</h3>
          <p class="text-zinc-400 text-xs leading-relaxed">
            Construção de pipelines ETL performáticos com Polars/Pandas, agregação de dados em larga escala e modelagem relacional.
          </p>
        </div>

        <div class="p-8 bg-darkcard/30 border border-zinc-800/80 rounded-sm">
          <h3 class="text-lg font-bold text-white mb-2">System Architecture</h3>
          <p class="text-zinc-400 text-xs leading-relaxed">
            Desacoplamento de componentes, orquestração de microsserviços e definições de padrões de comunicação resilientes.
          </p>
        </div>

        <div class="p-8 bg-darkcard/30 border border-zinc-800/80 rounded-sm">
          <h3 class="text-lg font-bold text-white mb-2">Full-Stack Integration</h3>
          <p class="text-zinc-400 text-xs leading-relaxed">
            Conexão fluida entre interfaces modernas e sistemas legados ou backends de alta complexidade.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="projects" class="py-24 border-b border-zinc-800/40 bg-zinc-950/20">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex items-center justify-between mb-16">
        <h2 class="text-3xl font-bold tracking-tight text-white uppercase">Projects</h2>
        <span class="text-xs font-mono text-zinc-500">04 / SELECTED WORKS</span>
      </div>

      <div class="space-y-20">
        
        <!-- PROJETO 1: CertGenerator -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <!-- Esquerda: Imagem do Projeto (Mockup / Preview) -->
          <div class="lg:col-span-7 bg-darkcard border border-zinc-800 p-2 rounded-sm overflow-hidden group">
            <img 
              src="certgenerator.png" 
              alt="CertGenerator Preview" 
              class="w-full h-auto object-cover rounded-sm opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </div>
          <!-- Direita: Título, Descrição, Tags e Link -->
          <div class="lg:col-span-5 space-y-4">
            <h3 class="text-2xl font-bold text-white">CertGenerator</h3>
            <p class="text-zinc-400 text-xs leading-relaxed">
              Motor de geração em massa de certificados utilizando parsing de dados, substituição vetorial SVG e renderização em PDF de alta precisão com suporte a QR Codes dinâmicos.
            </p>
            <div class="flex flex-wrap gap-2 py-2">
              <span class="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-300">Python</span>
              <span class="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-300">CairoSVG</span>
              <span class="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-300">SQLAlchemy</span>
            </div>
            <a href="#" class="inline-flex items-center gap-2 text-xs font-mono text-accent hover:underline pt-2">
              CertGenerator &rarr;
            </a>
          </div>
        </div>

        <!-- PROJETO 2: DataBridgeAPI -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <!-- Esquerda: Imagem do Projeto -->
          <div class="lg:col-span-7 bg-darkcard border border-zinc-800 p-2 rounded-sm overflow-hidden group">
            <img 
              src="caminho/para/imagem-databridgeapi.png" 
              alt="DataBridgeAPI Preview" 
              class="w-full h-auto object-cover rounded-sm opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </div>
          <!-- Direita: Título, Descrição, Tags e Link -->
          <div class="lg:col-span-5 space-y-4">
            <h3 class="text-2xl font-bold text-white">DataBridgeAPI</h3>
            <p class="text-zinc-400 text-xs leading-relaxed">
              API de alto desempenho projetada para interoperabilidade de dados, gerenciamento de conectores assíncronos e validação rigorosa de esquemas de dados em tempo real.
            </p>
            <div class="flex flex-wrap gap-2 py-2">
              <span class="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-300">Fastify</span>
              <span class="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-300">Node.js</span>
              <span class="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-300">PostgreSQL</span>
            </div>
            <a href="#" class="inline-flex items-center gap-2 text-xs font-mono text-accent hover:underline pt-2">
              DataBridgeAPI &rarr;
            </a>
          </div>
        </div>

        <!-- PROJETO 3: SIVEGEO -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <!-- Esquerda: Imagem do Projeto -->
          <div class="lg:col-span-7 bg-darkcard border border-zinc-800 p-2 rounded-sm overflow-hidden group">
            <img 
              src="/sivegeo.jpg" 
              alt="SIVEGEO Preview" 
              class="w-full h-auto object-cover rounded-sm opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </div>
          <!-- Direita: Título, Descrição, Tags e Link -->
          <div class="lg:col-span-5 space-y-4">
            <h3 class="text-2xl font-bold text-white">SIVEGEO</h3>
            <p class="text-zinc-400 text-xs leading-relaxed">
              Plataforma de inteligência e pipeline de dados em saúde pública. Processamento analítico vetorizado com Polars, integração geográfica e visualização interativa.
            </p>
            <div class="flex flex-wrap gap-2 py-2">
              <span class="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-300">Python</span>
              <span class="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-300">Polars</span>
              <span class="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-300">PySUS</span>
              <span class="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-300">Streamlit</span>
            </div>
            <a href="#" class="inline-flex items-center gap-2 text-xs font-mono text-accent hover:underline pt-2">
              SIVEGEO &rarr;
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- SECTION: CONTACT & FOOTER -->
  <section id="contact" class="py-24">
    <div class="max-w-7xl mx-auto px-6 text-center space-y-8">
    <h1>
    CONTACT
    </h1>  
    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
        Let’s build something useful
      </h2>
      <p class="text-zinc-400 text-xs sm:text-sm max-w-md mx-auto">
        Disponível para novos projetos de engenharia, desenvolvimento de arquiteturas backend e consultoria técnica.
      </p>

      <!-- Social Links / Contact -->
      <div class="flex justify-center items-center gap-8 pt-4 text-xs font-mono">
        <a href="mailto:jonata.turing@gmail.com" class="text-zinc-400 hover:text-accent transition-colors flex items-center gap-2">
          <span>[ Email ]</span>
        </a>
        <a href="https://github.com/Jdev256" target="_blank" class="text-zinc-400 hover:text-accent transition-colors flex items-center gap-2">
          <span>[ GitHub ]</span>
        </a>
        <a href="https://linkedin.com" target="_blank" class="text-zinc-400 hover:text-accent transition-colors flex items-center gap-2">
          <span>[ LinkedIn ]</span>
        </a>
      </div>

      
    </div>
  </section>
        `;
    }
}