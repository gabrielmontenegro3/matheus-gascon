import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Globe,
  Smartphone,
  ShoppingCart,
  Rocket,
  Database,
  Shield,
} from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Sites e aplicações web modernas, responsivas e de alta performance",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description:
        "Aplicativos móveis nativos e cross-platform com experiência premium",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description:
        "Plataformas de comércio eletrônico completas e otimizadas",
    },
    {
      icon: Rocket,
      title: "Performance",
      description:
        "Otimização de velocidade, SEO e conversão para resultados reais",
    },
    {
      icon: Database,
      title: "Backend",
      description:
        "APIs robustas, escaláveis e seguras para suas aplicações",
    },
    {
      icon: Shield,
      title: "Segurança",
      description:
        "Implementação de melhores práticas de segurança e proteção de dados",
    },
  ]

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Serviços</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para transformar sua presença digital
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                  <CardHeader>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 text-primary mb-4"
                    >
                      <Icon className="w-7 h-7" />
                    </motion.div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services

