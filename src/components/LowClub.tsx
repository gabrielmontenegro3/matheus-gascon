import { motion } from "framer-motion"
import { ArrowRight, Info, Rocket, Bot, DollarSign, ArrowUp, ArrowLeft } from "lucide-react"
import { useEffect, useState } from "react"

interface Notification {
  id: number
  app: string
  title: string
  message: string
  position: { top?: string; bottom?: string; left?: string; right?: string }
  delay: number
  zIndex: number
}

const LowClub = () => {
  const [notifications] = useState<Notification[]>([
    // Notificações em cima - Atrás do corpo (z-index menor)
    {
      id: 1,
      app: "PIX",
      title: "Transferência PIX Recebida",
      message: "Você recebeu uma transferência de R$25",
      position: { top: "10%", left: "5%" },
      delay: 0,
      zIndex: 10,
    },
    {
      id: 2,
      app: "PIX",
      title: "Transferência Recebida",
      message: "Você recebeu uma transferência",
      position: { top: "15%", right: "8%" },
      delay: 1,
      zIndex: 10,
    },
    // Notificações abaixo - Na frente do corpo (z-index maior)
    {
      id: 3,
      app: "PIX",
      title: "Transferência PIX Recebida",
      message: "Você recebeu uma transferência de R$800",
      position: { bottom: "20%", left: "8%" },
      delay: 2,
      zIndex: 30,
    },
    {
      id: 4,
      app: "PIX",
      title: "Transferência Recebida",
      message: "Você recebeu uma transferência de R$1.200",
      position: { bottom: "15%", right: "5%" },
      delay: 3,
      zIndex: 30,
    },
  ])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Primeira Seção - Hero com Logo, Texto e Imagem */}
      <div className="bg-[#0a0a0a] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 py-8 relative z-10">
          {/* Logo Matheus Gascon */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3">
              <h1 className="text-4xl md:text-5xl font-bold text-[#4ade80]">
                Matheus
              </h1>
              <div className="h-12 w-[2px] bg-[#4ade80]"></div>
              <h2 className="text-2xl md:text-3xl font-normal text-[#4ade80]">
                Gascon
              </h2>
            </div>
          </motion.div>

          {/* Texto principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 max-w-4xl"
          >
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Eu posso te ajudar a <span className="text-[#4ade80]">escalar</span> suas <span className="text-[#4ade80]">vendas</span> e <span className="text-[#4ade80]">aumentar</span> seus <span className="text-[#4ade80]">lucros</span> com <span className="text-[#4ade80]">estratégias</span> <span className="text-[#4ade80]">validadas</span> de <span className="text-[#4ade80]">anúncios online</span>
            </p>
          </motion.div>

          {/* Botão com animação de líquido */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12 flex justify-center"
          >
            <LiquidButton />
          </motion.div>

          {/* Área da imagem com notificações */}
          <div className="relative min-h-[500px] flex items-center justify-center overflow-hidden pb-32">
            {/* Notificações em cima - Atrás do corpo */}
            {notifications.filter(n => n.position.top && n.zIndex === 10).map((notification) => (
              <NotificationCard
                key={notification.id}
                notification={notification}
              />
            ))}

            {/* Imagem do Matheus - No meio */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="relative z-20 matheus-image-container"
            >
              {/* Container da imagem */}
              <div className="relative matheus-image-wrapper matheus-image-wrapper-fade">
                <img
                  src="/imgmatheus.png"
                  alt="Matheus Gascon"
                  className="matheus-image max-w-full h-auto max-h-[500px] object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    if (target.src !== window.location.origin + "/imgmatheus.png") {
                      target.src = "./imgmatheus.png"
                    }
                  }}
                />
              </div>
            </motion.div>

            {/* Notificações abaixo - Na frente do corpo */}
            {notifications.filter(n => n.position.bottom && n.zIndex === 30).map((notification) => (
              <NotificationCard
                key={notification.id}
                notification={notification}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fade de transição entre preto e branco */}
      <div className="h-24 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] via-[#2a2a2a] via-[#3a3a3a] via-[#4a4a4a] via-[#5a5a5a] to-gray-100"></div>

      {/* Seção Superior - Fundo Cinza Claro */}
      <div className="bg-gray-100 text-black">
        <div className="container mx-auto px-4 py-12 md:py-16">
          {/* Título */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Vou abrir o jogo
            </h1>
          </motion.div>

          {/* Subtítulo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
              Vou te mostrar em menos de 30 minutos, tudo que faço para lucrar de R$200 a R$1.000 por dia.
            </p>
          </motion.div>

          {/* Boxes de Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 max-w-2xl mx-auto"
          >
            <FeatureBox
              icon={<Rocket className="w-8 h-8" />}
              text="Como encontrar as ofertas mais escaladas"
            />
            <FeatureBox
              icon={<Bot className="w-8 h-8" />}
              text="Como montar uma operação com BOT no X1"
            />
            <FeatureBox
              icon={<div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center"><DollarSign className="w-6 h-6" /></div>}
              text="Como testar e escalar com pouca verba"
            />
            <FeatureBox
              icon={<div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center"><ArrowUp className="w-6 h-6" /></div>}
              text="Sem enrolação! Apenas aplicar e lucrar"
            />
          </motion.div>
        </div>
      </div>

      {/* Seção de Transição - Cards de Lucro */}
      <div className="bg-gradient-to-b from-gray-100 via-gray-50 to-[#0a0a0a] py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 max-w-md mx-auto"
          >
            <ProfitCard amount="331,93" />
            <ProfitCard amount="873,21" />
            <ProfitCard amount="492,81" />
          </motion.div>
        </div>
      </div>

      {/* Seção de Call to Action - Parte de baixo */}
      <div className="bg-[#0a0a0a] text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            {/* Título */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4ade80]">
              Não vai ter outra chance
            </h2>

            {/* Subtítulo */}
            <p className="text-xl md:text-2xl text-white">
              Uma única chance. Se perder, já era.
            </p>

            {/* Botão CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center pt-4"
            >
              <LiquidButtonCTA />
            </motion.div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-12 mt-12 border-t border-gray-800"
            >
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed max-w-4xl mx-auto">
                Matheus Gascon © 2025 - Todos os direitos reservados.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

// Componente do botão com animação de líquido cinematográfico ultra realista
const LiquidButton = () => {
  return (
    <button className="ultra-cinematic-button group relative px-16 py-6 rounded-full font-bold text-white text-lg md:text-xl overflow-hidden transition-all duration-500 hover:scale-105">
      {/* Base sólida do botão */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a5d2e] via-[#4ade80] to-[#16a34a] opacity-95"></div>
      
      {/* Camadas de líquido realistas */}
      <div className="absolute inset-0 ultra-liquid-layer-1"></div>
      <div className="absolute inset-0 ultra-liquid-layer-2"></div>
      <div className="absolute inset-0 ultra-liquid-layer-3"></div>
      <div className="absolute inset-0 ultra-liquid-layer-4"></div>
      
      {/* Efeito de profundidade e volume */}
      <div className="absolute inset-0 liquid-depth-effect"></div>
      
      {/* Bolhas de líquido flutuantes */}
      <div className="absolute inset-0 liquid-bubbles"></div>
      
      {/* Reflexos e brilhos */}
      <div className="absolute inset-0 liquid-reflections"></div>
      
      {/* Overlay escuro nas bordas (vignette) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
      
      {/* Conteúdo do botão */}
      <span className="relative z-20 flex items-center gap-3 tracking-wider">
        <span className="ultra-cinematic-text-glow">QUERO A CONSULTORIA ONLINE</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
      </span>
      
      {/* Brilho cinematográfico no hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/60 to-transparent ultra-liquid-shine"></div>
      
      {/* Borda animada com líquido */}
      <div className="absolute inset-0 ultra-cinematic-border"></div>
      
      {/* Efeito de ondas na superfície */}
      <div className="absolute inset-0 liquid-surface-waves"></div>
    </button>
  )
}

// Componente de Feature Box
const FeatureBox = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
  return (
    <div className="feature-box group relative rounded-lg p-5 flex items-center justify-between cursor-pointer transition-all duration-300 hover:scale-[1.01]">
      {/* Linha preta vertical à esquerda */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-black rounded-l-lg"></div>
      
      {/* Container principal */}
      <div className="flex items-center justify-between w-full pl-6">
        {/* Lado esquerdo: Ícone e texto */}
        <div className="flex flex-col items-start gap-3 flex-1">
          {/* Ícone centralizado no topo */}
          <div className="flex justify-center w-full">
            <div className="text-black">
              {icon}
            </div>
          </div>
          {/* Texto abaixo do ícone */}
          <p className="text-black font-medium text-base md:text-lg leading-tight text-left">
            {text}
          </p>
        </div>
        
        {/* Seta à direita */}
        <div className="flex-shrink-0 ml-4">
          <ArrowLeft className="w-5 h-5 text-black group-hover:-translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  )
}

// Componente de Card de Lucro
const ProfitCard = ({ amount }: { amount: string }) => {
  const [isInView, setIsInView] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      onViewportEnter={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
      transition={{ duration: 0.6 }}
      className={`profit-card bg-[#1a1a1a] rounded-lg p-5 relative min-h-[120px] border border-gray-800 transition-all duration-500 ${
        isInView ? "profit-card-visible" : "profit-card-blurred"
      }`}
    >
      {/* "Lucro" no topo-esquerda */}
      <span className="absolute top-5 left-5 text-[#4ade80] font-semibold text-base">
        Lucro
      </span>
      
      {/* Valor e ícone no canto inferior-direito */}
      <div className="absolute bottom-5 right-5 flex items-center gap-3">
        <p className="text-3xl md:text-4xl font-bold text-[#4ade80]">
          R$ {amount}
        </p>
        <div className="w-6 h-6 rounded-full bg-[#4ade80] flex items-center justify-center flex-shrink-0">
          <Info className="w-3 h-3 text-white" />
        </div>
      </div>
    </motion.div>
  )
}

// Componente de botão CTA (igual ao de cima)
const LiquidButtonCTA = () => {
  return (
    <button className="ultra-cinematic-button group relative px-16 py-6 rounded-full font-bold text-white text-lg md:text-xl overflow-hidden transition-all duration-500 hover:scale-105">
      {/* Base sólida do botão */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a5d2e] via-[#4ade80] to-[#16a34a] opacity-95"></div>
      
      {/* Camadas de líquido realistas */}
      <div className="absolute inset-0 ultra-liquid-layer-1"></div>
      <div className="absolute inset-0 ultra-liquid-layer-2"></div>
      <div className="absolute inset-0 ultra-liquid-layer-3"></div>
      <div className="absolute inset-0 ultra-liquid-layer-4"></div>
      
      {/* Efeito de profundidade e volume */}
      <div className="absolute inset-0 liquid-depth-effect"></div>
      
      {/* Bolhas de líquido flutuantes */}
      <div className="absolute inset-0 liquid-bubbles"></div>
      
      {/* Reflexos e brilhos */}
      <div className="absolute inset-0 liquid-reflections"></div>
      
      {/* Overlay escuro nas bordas (vignette) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
      
      {/* Conteúdo do botão */}
      <span className="relative z-20 flex items-center gap-3 tracking-wider">
        <span className="ultra-cinematic-text-glow">QUERO A CONSULTORIA ONLINE</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
      </span>
      
      {/* Brilho cinematográfico no hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/60 to-transparent ultra-liquid-shine"></div>
      
      {/* Borda animada com líquido */}
      <div className="absolute inset-0 ultra-cinematic-border"></div>
      
      {/* Efeito de ondas na superfície */}
      <div className="absolute inset-0 liquid-surface-waves"></div>
    </button>
  )
}

// Componente de notificação
const NotificationCard = ({ notification }: { notification: Notification }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, notification.delay * 1000)

    return () => clearTimeout(timer)
  }, [notification.delay])

  const isPix = notification.app === "PIX"

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={
        isVisible
          ? {
              opacity: 1,
              scale: 1,
              y: 0,
              rotate: [0, -2, 2, -2, 0],
            }
          : {}
      }
      transition={{
        duration: 0.5,
        delay: notification.delay,
        rotate: {
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 3,
        },
      }}
      className={`notification-card-3d absolute rounded-lg p-3 max-w-[200px] overflow-hidden ${notification.position.top ? `top-[${notification.position.top}]` : ""} ${notification.position.bottom ? `bottom-[${notification.position.bottom}]` : ""} ${notification.position.left ? `left-[${notification.position.left}]` : ""} ${notification.position.right ? `right-[${notification.position.right}]` : ""}`}
      style={{
        top: notification.position.top,
        bottom: notification.position.bottom,
        left: notification.position.left,
        right: notification.position.right,
        zIndex: notification.zIndex || 10,
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Fade à esquerda */}
      <div className="absolute inset-0 notification-fade-left pointer-events-none z-10"></div>
      
      {/* Conteúdo */}
      <div className="relative z-0 flex items-start gap-2">
        <div
          className={`w-8 h-8 rounded flex items-center justify-center flex-shrink-0 ${
            isPix ? "bg-[#4ade80]/20" : "bg-gray-700"
          }`}
        >
          {isPix ? (
            <div className="text-[#4ade80] font-bold text-xs">∞</div>
          ) : (
            <div className="text-gray-300 font-bold text-xs">KVN</div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-white mb-1">
            {notification.title}
          </p>
          <p className="text-[10px] text-gray-400 leading-tight">
            {notification.message}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default LowClub

