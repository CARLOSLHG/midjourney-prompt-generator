import React, { useState } from 'react';
import './App.css';

// Arrays para las variables
const Personaje = [
  'Personalizado', 
  'Protagonista', 'Antagonista', 'Robot', 'Humanoide', 'Alienígena',
  'Guerrero', 'Explorador', 'Ser mitológico', 'Navegante', 'Piloto',
  'Hechicero', 'Héroe distópico', 'Mercenario', 'Artista del caos', 'Científico loco',
  'Guardia espacial', 'Asesino a sueldo', 'Detective futurista', 'Viajero del tiempo', 'Pirata cibernético',
  'Ingeniero post-apocalíptico', 'Capitán de nave', 'Tecnólogo alienígena', 'Sombra ninja', 'Gladiador del futuro',
  'Superviviente', 'Entusiasta de la inteligencia artificial', 'Clon rebelde', 'Mutante', 'Entidad interdimensional',
  'Domador de bestias', 'Cyber-ingeniero', 'Alquimista', 'Cazador de recompensas', 'Samurái tecnológico',
  'Agente secreto', 'Ladrón intergaláctico', 'Comandante de robots', 'Guardia de seguridad cósmica', 'Asesino ciborg',
  'Chamán del espacio', 'Vigilante nocturno', 'Piloto de drones', 'Arquitecto virtual', 'Revolucionario digital',
  'Alma reencarnada', 'Capitán alienígena', 'Golem de inteligencia artificial', 'Comerciante de mundos', 'Maestro del tiempo'
];

const Estilo = [
  'Personalizado', 
  'Futurista', 'Medieval', 'Steampunk', 'Cyberpunk', 'Minimalista',
  'Arte conceptual', 'Fotorealista', 'Acuarela', 'Arte digital', 'Pintura al óleo',
  'Pixel art', 'Impresionismo', 'Cubismo', 'Arte surrealista', 'Papel recortado',
  'Arte de cómic', 'Fotografía abstracta', 'Técnica mixta', 'Tinta china', 'Arte minimalista',
  'Estilo barroco', 'Estilo rococó', 'Estilo futurista', 'Estilo postmoderno', 'Pop art',
  'Realismo mágico', 'Arte renacentista', 'Surrealismo', 'Concept art', 'Arte en 3D',
  'Estilo manga', 'Gráficos de videojuegos', 'Estilo de acuarela', 'Arte geométrico', 'Ilustración digital',
  'Diseño abstracto', 'Estilo pixelado', 'Arte pop', 'Estilo urbano', 'Arte fractal',
  'Arte de graffiti', 'Arte retrofuturista', 'Arte conceptual', 'Estilo gótico', 'Estilo tradicional',
  'Estilo caricatura', 'Estilo vaporwave', 'Cómic estilo americano', 'Pintura al óleo abstracta', 'Arte tribal'
];

const Ambiente = [
  'Personalizado', 
  'Oscuro', 'Misterioso', 'Post-apocalíptico', 'Natural', 'Urbano',
  'Espacial', 'Cósmico', 'Tranquilo', 'Lúgubre', 'Fantasmal',
  'Submarino', 'Futurista', 'Volcánico', 'Boscoso', 'Nevado',
  'Cálido', 'Frío', 'Desértico', 'Pantano', 'Isla tropical',
  'Playa soleada', 'Montañas nevadas', 'Jungla densa', 'Océano profundo', 'Cueva oscura',
  'Espacio exterior', 'Mundo alienígena', 'Interior industrial', 'Ciberespacio', 'Entorno urbano futurista',
  'Entorno de ciencia ficción', 'Llanura desolada', 'Metrópolis luminosa', 'Suburbios desérticos', 'Selva exótica',
  'Desierto helado', 'Ruinas antiguas', 'Megalópolis post-apocalíptica', 'Castillo encantado', 'Zona industrial abandonada',
  'marítimo', 'subterráneo', 'Bosque encantado', 'Criptas', 'Dimensión alterna',
  'Entorno cibernético', 'Planeta hostil', 'Valle tranquilo', 'radioactivo', 'Laboratorio subterráneo'
];

const Tipo = [
  'Personalizado', 
  'Hiperrealista', 'Estilo cómic', 'Fotorealista', 'Pintura al óleo', 'Acuarela',
  'Pixelado', '4K', '16:9', 'Ultra realista', 'Arte fractal',
  'Estilo de baja resolución', 'Estilo cinematográfico', 'Gráficos de juegos retro', 'Ilustración detallada', 'Textura rugosa',
  'Renderizado en alta calidad', 'HDR', 'Ilustración digital', 'Fotografía macro', 'Dibujo técnico',
  'Estilo de arte vectorial', 'Técnica de sombreado suave', 'Claroscuro', 'Iluminación volumétrica', 'Detallado extremo',
  'Estilo surrealista', 'Arte renacentista', 'Calidad de escultura 3D', 'Arte de modelado', 'Animación de alta definición',
  'Iluminación natural', 'Fotografía de alta velocidad', 'Renderizado PBR', 'Estilo manga', 'Arte conceptual',
  'Arte de fantasía', 'Arte abstracto', 'Renderizado en baja calidad', 'Renderizado en tiempo real', 'Dibujo a mano alzada',
  'Escena en tiempo real', 'Estilo gráfico de juegos', 'Fotografía documental', 'Ilustración animada', 'Estilo glitch',
  'Calidad vintage', 'Estilo de película', 'Estilo fotográfico', 'Estilo de arte fractal', 'Técnica de collage'
];

const Complemento = [
  'Personalizado', 
  'Víctimas', 'Herramientas', 'Paisaje', 'Armas', 'Tecnología avanzada',
  'Vehículos', 'Criaturas', 'Escenas de combate', 'Ruinas', 'Cámaras de seguridad',
  'Artefactos antiguos', 'Vehículos voladores', 'Razas alienígenas', 'Edificios destruidos', 'Restos de civilización',
  'Escudos de energía', 'Drones', 'Exoesqueletos', 'Robots gigantes', 'Búnkeres subterráneos',
  'Instrumentos de tortura', 'Máquinas del futuro', 'Tesoros ocultos', 'Pirámides antiguas', 'Tecnología perdida',
  'Naves espaciales', 'Armaduras cibernéticas', 'Trampas mecánicas', 'Dispositivos de espionaje', 'Monumentos futuristas',
  'Animales mecánicos', 'Edificios flotantes', 'Árboles bioluminiscentes', 'Túneles secretos', 'Enemigos robóticos',
  'Esferas flotantes', 'Generadores de energía', 'Hologramas', 'Cañones de plasma', 'Rastros de destrucción',
  'Vestigios de guerra', 'Relíquias del pasado', 'Puentes rotos', 'Campos de batalla', 'Tecnología obsoleta',
  'Obeliscos místicos', 'Cristales de poder', 'Portales dimensionales', 'Seres mecánicos', 'Brazaletes de control'
];

const Camara = [
  'Personalizado', 
  'Vista aérea', 'Close-up', 'Perspectiva angular', 'Vista en primera persona', 'Vista desde abajo',
  'Plano general', 'Plano medio', 'Perspectiva lejana', 'Enfoque frontal', 'Enfoque de perfil',
  'Toma panorámica', 'Plano cenital', 'Perspectiva en movimiento', 'Plano detalle', 'Perspectiva subjetiva',
  'Plano holandés', 'Plano de seguimiento', 'Plano contrapicado', 'Plano secuencia', 'Plano de reacción',
  'Toma en 360 grados', 'Vista desde arriba', 'Perspectiva aérea de dron', 'Plano de ángulo bajo', 'Plano macro',
  'Plano superdetalle', 'Perspectiva ojo de pez', 'Perspectiva borrosa', 'Toma estática', 'Toma cinemática',
  'Plano de tres cuartos', 'Perspectiva forzada', 'Plano subjetivo', 'Toma en cámara lenta', 'Toma a contraluz',
  'Plano grupal', 'Plano medio largo', 'Toma en movimiento rápido', 'Vista de realidad aumentada', 'Plano visual distorsionado',
  'Plano en primera persona', 'Perspectiva fija', 'Plano de arrastre', 'Toma épica', 'Plano de tensión',
  'Toma en cámara rápida', 'Perspectiva de túnel', 'Perspectiva desde un espejo', 'Plano de sobrevuelo', 'Plano expandido'
];

const Tiempo = [
  'Personalizado', 
  'Nublado', 'Lluvia ligera', 'Tormenta eléctrica', 'Niebla', 'Día soleado',
  'Noche despejada', 'Atardecer', 'Amanecer', 'Nevada', 'Lluvia torrencial',
  'Viento fuerte', 'Tormenta de nieve', 'Cielo despejado', 'Lluvia intermitente', 'Día lluvioso',
  'Cielo anaranjado', 'Cielo púrpura', 'Aire seco', 'Brisa marina', 'Humedad densa',
  'Cielo nocturno estrellado', 'Cielo cubierto', 'Niebla espesa', 'Viento suave', 'Amanecer radiante',
  'Lluvia con sol', 'Tormenta tropical', 'Cielo tormentoso', 'Niebla misteriosa', 'Cielo con nubes dispersas',
  'Atmósfera nevada', 'Lluvia helada', 'Día despejado', 'Tormenta con relámpagos', 'Día caluroso',
  'Niebla helada', 'Amanecer con bruma', 'Viento tempestuoso', 'Día brumoso', 'Cielo al atardecer',
  'Cielo gris plomizo', 'Lluvia de verano', 'Tormenta de granizo', 'Día soleado y ventoso', 'Cielo multicolor',
  'Nevada intensa', 'Bruma costera', 'Cielo dorado', 'Niebla tenue', 'Tormenta con truenos'
];

const Iluminacion = [
  'Personalizado', 
  'Iluminación dramática', 'Luz suave', 'Contraluz', 'Luz de neón', 'Iluminación tenue',
  'Luz cenital', 'Luz lateral', 'Luces de velas', 'Sombras profundas', 'Luz natural',
  'Iluminación cálida', 'Luz fría', 'Luz incandescente', 'Iluminación LED', 'Luz filtrada',
  'Contraluz intensa', 'Iluminación indirecta', 'Luz ambiente', 'Brillo intenso', 'Silueta contra luz',
  'Iluminación en blanco y negro', 'Sombras difusas', 'Iluminación bajo el agua', 'Luz de amanecer', 'Luz de anochecer',
  'Iluminación de emergencia', 'Luz tenue', 'Iluminación de fuego', 'Iluminación artificial', 'Luz ultravioleta',
  'Luz proyectada', 'Sombras alargadas', 'Luz láser', 'Iluminación festiva', 'Sombras en movimiento',
  'Iluminación industrial', 'Iluminación de estudio', 'Luces intermitentes', 'Iluminación natural suave', 'Sombras vibrantes',
  'Luz cálida de lámpara', 'Luz difusa de ventana', 'Luz de faros', 'Sombras angulares', 'Iluminación retroiluminada',
  'Luces de espectáculo', 'Sombras pronunciadas', 'Iluminación teatral', 'Sombras oscuras', 'Brillo de metal'
];

const Momentum = [
  'Personalizado', 
  'Movimiento rápido', 'Movimiento lento', 'Estático', 'Fluido', 'Caótico',
  'Explosivo', 'Movimiento ondulado', 'Movimiento circular', 'Aceleración repentina', 'Desplazamiento en zigzag',
  'Movimiento en espiral', 'Movimiento repetitivo', 'Movimiento rítmico', 'Movimiento errático', 'Movimiento sincronizado',
  'Vibración rápida', 'Desplazamiento continuo', 'Movimiento pendular', 'Movimiento suave', 'Movimiento frenético',
  'Cambio abrupto', 'Transición gradual', 'Movimiento en bucle', 'Movimiento elíptico', 'Movimiento aleatorio',
  'Movimiento intermitente', 'Movimiento controlado', 'Desplazamiento horizontal', 'Movimiento vertical', 'Flujo constante',
  'Movimiento de rebote', 'Oscilación ligera', 'Aceleración suave', 'Desplazamiento brusco', 'Movimiento difuso',
  'Movimiento en cámara lenta', 'Movimiento acelerado', 'Ondas de movimiento', 'Flujo armónico', 'Movimiento caótico',
  'Movimiento en arco', 'Movimiento de vaivén', 'Flujo turbulento', 'Movimiento de choque', 'Movimiento rotativo',
  'Desplazamiento en curva', 'Movimiento expansivo', 'Movimiento cíclico', 'Ondas suaves', 'Movimiento errático extremo'
];


function App() {
  // Estado para las variables
  const [variable1, setVariable1] = useState('');
  const [customVariable1, setCustomVariable1] = useState('');
  const [variable2, setVariable2] = useState('');
  const [customVariable2, setCustomVariable2] = useState('');
  const [variable3, setVariable3] = useState('');
  const [customVariable3, setCustomVariable3] = useState('');
  const [variable4, setVariable4] = useState('');
  const [customVariable4, setCustomVariable4] = useState('');
  const [variable5, setVariable5] = useState('');
  const [customVariable5, setCustomVariable5] = useState('');
  const [variable6, setVariable6] = useState('');
  const [customVariable6, setCustomVariable6] = useState('');
  const [variable10, setVariable10] = useState('');
  const [customVariable10, setCustomVariable10] = useState('');
  const [variable11, setVariable11] = useState('');
  const [customVariable11, setCustomVariable11] = useState('');
  const [variable12, setVariable12] = useState('');
  const [customVariable12, setCustomVariable12] = useState('');
  const [variable7, setVariable7] = useState('');
  const [variable8, setVariable8] = useState('');
  const [variable9, setVariable9] = useState('');

  // Función para generar el prompt
  const generatePrompt = () => {
    const finalVariable1 = variable1 === 'Personalizado' ? customVariable1 : variable1;
    const finalVariable2 = variable2 === 'Personalizado' ? customVariable2 : variable2;
    const finalVariable3 = variable3 === 'Personalizado' ? customVariable3 : variable3;
    const finalVariable4 = variable4 === 'Personalizado' ? customVariable4 : variable4;
    const finalVariable5 = variable5 === 'Personalizado' ? customVariable5 : variable5;
    const finalVariable6 = variable6 === 'Personalizado' ? customVariable6 : variable6;
    const finalVariable10 = variable10 === 'Personalizado' ? customVariable10 : variable10;
    const finalVariable11 = variable11 === 'Personalizado' ? customVariable11 : variable11;
    const finalVariable12 = variable12 === 'Personalizado' ? customVariable12 : variable12;

    const prompt = `Imagina un ${finalVariable1}, ${finalVariable2}, la atmósfera ${finalVariable3}, ${finalVariable4}, incluye elementos como ${finalVariable5}, la posición de la cámara ${finalVariable6}, el clima ${finalVariable10}, la iluminacion ${finalVariable11}, el momentum es ${finalVariable12}, --v ${variable7} --s ${variable8} --ar ${variable9}`;
    alert(prompt);
  };

  // Función para reiniciar los dropdowns
  const resetFields = () => {
    setVariable1('');
    setCustomVariable1('');
    setVariable2('');
    setCustomVariable2('');
    setVariable3('');
    setCustomVariable3('');
    setVariable4('');
    setCustomVariable4('');
    setVariable5('');
    setCustomVariable5('');
    setVariable6('');
    setCustomVariable6('');
    setVariable10('');
    setCustomVariable10('');
    setVariable11('');
    setCustomVariable11('');
    setVariable12('');
    setCustomVariable12('');
    setVariable7('');
    setVariable8('');
    setVariable9('');
  };

  // Función para copiar el prompt al portapapeles
  const copyToClipboard = () => {
    const finalVariable1 = variable1 === 'Personalizado' ? customVariable1 : variable1;
    const finalVariable2 = variable2 === 'Personalizado' ? customVariable2 : variable2;
    const finalVariable3 = variable3 === 'Personalizado' ? customVariable3 : variable3;
    const finalVariable4 = variable4 === 'Personalizado' ? customVariable4 : variable4;
    const finalVariable5 = variable5 === 'Personalizado' ? customVariable5 : variable5;
    const finalVariable6 = variable6 === 'Personalizado' ? customVariable6 : variable6;
    const finalVariable10 = variable10 === 'Personalizado' ? customVariable10 : variable10;
    const finalVariable11 = variable11 === 'Personalizado' ? customVariable11 : variable11;
    const finalVariable12 = variable12 === 'Personalizado' ? customVariable12 : variable12;

    const prompt = `Imagina un ${finalVariable1}, ${finalVariable2}, la atmósfera ${finalVariable3}, ${finalVariable4}, incluye elementos como ${finalVariable5}, la posición de la cámara ${finalVariable6}, el clima ${finalVariable10}, la iluminacion ${finalVariable11}, el momentum es ${finalVariable12}, --v ${variable7} --s ${variable8} --ar ${variable9}`;
    navigator.clipboard.writeText(prompt);
    alert('Prompt copiado al portapapeles');
  };

  return (
    <div className="App">
      <h1>MidJourney Prompt Generator v1.0</h1>
      <h2>creado por: CarlosLHG</h2>

      <div className="select-container">
      
          <div>
          <label>Personaje:</label>
          <select value={variable1} onChange={(e) => setVariable1(e.target.value)}>
            <option value="">Selecciona</option>
            {Personaje.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          {variable1 === 'Personalizado' && (
            <input
              type="text"
              placeholder="Introduce tu propia opción"
              value={customVariable1}
              onChange={(e) => setCustomVariable1(e.target.value)}
            />
          )}
        </div>

        <div>
          <label>Estilo:</label>
          <select value={variable2} onChange={(e) => setVariable2(e.target.value)}>
            <option value="">Selecciona</option>
            {Estilo.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          {variable2 === 'Personalizado' && (
            <input
              type="text"
              placeholder="Introduce tu propia opción"
              value={customVariable2}
              onChange={(e) => setCustomVariable2(e.target.value)}
            />
          )}
        </div>

        <div>
          <label>Ambiente:</label>
          <select value={variable3} onChange={(e) => setVariable3(e.target.value)}>
            <option value="">Selecciona</option>
            {Ambiente.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          {variable3 === 'Personalizado' && (
            <input
              type="text"
              placeholder="Introduce tu propia opción"
              value={customVariable3}
              onChange={(e) => setCustomVariable3(e.target.value)}
            />
          )}
        </div>


        <div>
          <label>Tipo:</label>
          <select value={variable4} onChange={(e) => setVariable4(e.target.value)}>
            <option value="">Selecciona</option>
            {Tipo.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          {variable4 === 'Personalizado' && (
            <input
              type="text"
              placeholder="Introduce tu propia opción"
              value={customVariable4}
              onChange={(e) => setCustomVariable4(e.target.value)}
            />
          )}
        </div>

        <div>
          <label>Complementos:</label>
          <select value={variable5} onChange={(e) => setVariable5(e.target.value)}>
            <option value="">Selecciona</option>
            {Complemento.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          {variable5 === 'Personalizado' && (
            <input
              type="text"
              placeholder="Introduce tu propia opción"
              value={customVariable5}
              onChange={(e) => setCustomVariable5(e.target.value)}
            />
          )}
        </div>

        <div>
          <label>Cámara:</label>
          <select value={variable6} onChange={(e) => setVariable6(e.target.value)}>
            <option value="">Selecciona</option>
            {Camara.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          {variable6 === 'Personalizado' && (
            <input
              type="text"
              placeholder="Introduce tu propia opción"
              value={customVariable6}
              onChange={(e) => setCustomVariable6(e.target.value)}
            />
          )}
        </div>

        <div>
          <label>Clima:</label>
          <select value={variable10} onChange={(e) => setVariable10(e.target.value)}>
            <option value="">Selecciona</option>
            {Tiempo.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          {variable10 === 'Personalizado' && (
            <input
              type="text"
              placeholder="Introduce tu propia opción"
              value={customVariable10}
              onChange={(e) => setCustomVariable10(e.target.value)}
            />
          )}
        </div>

        <div>
          <label>Iluminación:</label>
          <select value={variable11} onChange={(e) => setVariable11(e.target.value)}>
            <option value="">Selecciona</option>
            {Iluminacion.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          {variable11 === 'Personalizado' && (
            <input
              type="text"
              placeholder="Introduce tu propia opción"
              value={customVariable11}
              onChange={(e) => setCustomVariable11(e.target.value)}
            />
          )}
        </div>

        <div>
          <label>Momentum:</label>
          <select value={variable12} onChange={(e) => setVariable12(e.target.value)}>
            <option value="">Selecciona</option>
            {Momentum.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          {variable12 === 'Personalizado' && (
            <input
              type="text"
              placeholder="Introduce tu propia opción"
              value={customVariable12}
              onChange={(e) => setCustomVariable12(e.target.value)}
            />
          )}
        </div>


        <div>
          <label>Versión:</label>
          <select value={variable7} onChange={(e) => setVariable7(e.target.value)}>
            <option value="">Selecciona</option>
            <option value="5.1">5.1</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
          </select>
        </div>


      <div>
        <label>Stylize:</label>
        <select value={variable8} onChange={(e) => setVariable8(e.target.value)}>
          <option value="">Selecciona</option>
          <option value="50">50</option>
          <option value="500">500</option>
          <option value="1000">1000</option>
          <option value="2500">2500</option>
        </select>
      </div>

      <div>
        <label>Aspect Ratio:</label>
        <select value={variable9} onChange={(e) => setVariable9(e.target.value)}>
          <option value="">Selecciona</option>
          <option value="1:1">1:1</option>
          <option value="16:9">16:9</option>
          <option value="4:5">4:5</option>
          <option value="9:16">9:16</option>
          <option value="2:3">2:3</option>
          <option value="2:1">2:1</option>
          <option value="1:2">1:2</option>
          <option value="3:2">3:2</option>
        </select>
      </div>
      </div>

      {/* Botones */}
      <button onClick={generatePrompt}>Generar</button>
      <button onClick={resetFields}>Reiniciar</button>
      <button onClick={copyToClipboard}>Copiar al portapapeles</button>
    </div>
  );
}

export default App;
