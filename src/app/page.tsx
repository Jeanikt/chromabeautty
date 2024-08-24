"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Instagram,
  Sun,
  Moon,
  ShoppingBag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function Component() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [temperature, setTemperature] = useState("warm");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleTemperature = () =>
    setTemperature((prev) => (prev === "warm" ? "cold" : "warm"));

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <header className="sticky top-0 backdrop-blur-md z-50 transition-colors duration-300">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1
            className={`text-2xl font-bold ${
              isDarkMode ? "text-pink-400" : "text-purple-600"
            }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            ChromaBeautty
          </motion.h1>
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              variant="ghost"
              className={
                isDarkMode
                  ? "text-pink-400 hover:text-pink-300"
                  : "text-purple-600 hover:text-purple-500"
              }
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Comprar
            </Button>
            <Button
              variant="outline"
              className={`${
                isDarkMode
                  ? "bg-pink-500 hover:bg-pink-600 text-white"
                  : "bg-purple-500 hover:bg-purple-600 text-white"
              } border-none`}
              onClick={() =>
                window.open(
                  "https://www.instagram.com/chromabeautty/",
                  "_blank"
                )
              }
            >
              <Instagram className="mr-2 h-4 w-4" />
              Instagram
            </Button>
            <Switch
              checked={isDarkMode}
              onCheckedChange={toggleTheme}
              className={`${isDarkMode ? "bg-pink-600" : "bg-purple-600"}`}
            />
            {isDarkMode ? (
              <Moon className="h-4 w-4 text-pink-400" />
            ) : (
              <Sun className="h-4 w-4 text-purple-600" />
            )}
          </motion.div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-20">
          <motion.h2
            className={`text-5xl font-bold mb-4 ${
              isDarkMode ? "text-pink-400" : "text-purple-800"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transforme Seu Visual a Cada Toque
          </motion.h2>
          <motion.p
            className={`text-xl mb-8 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Descubra produtos de beleza que mudam de cor com a temperatura. Seja
            ousada, seja diferente, seja ChromaBeautty.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              className={`${
                isDarkMode
                  ? "bg-pink-500 hover:bg-pink-600"
                  : "bg-purple-500 hover:bg-purple-600"
              } text-white`}
            >
              Explorar Produtos <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </section>

        <section className="mb-20">
          <h3
            className={`text-3xl font-semibold text-center mb-10 ${
              isDarkMode ? "text-pink-400" : "text-purple-800"
            }`}
          >
            Experimente a Magia
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {["Esmalte", "Maquiagem", "Coloração Capilar"].map(
              (product, index) => (
                <motion.div
                  key={product}
                  className={`rounded-lg shadow-lg overflow-hidden ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="p-6">
                    <h4
                      className={`text-xl font-semibold mb-2 ${
                        isDarkMode ? "text-pink-400" : "text-purple-700"
                      }`}
                    >
                      {product}
                    </h4>
                    <p
                      className={`mb-4 ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Veja a mudança diante dos seus olhos!
                    </p>
                    <motion.div
                      className={`h-40 rounded-md transition-colors duration-500 flex items-center justify-center`}
                      animate={{
                        background:
                          temperature === "warm"
                            ? [
                                "linear-gradient(45deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)",
                                "linear-gradient(45deg, #FFC796 0%, #FF9B82 55%, #FFB8A1 100%)",
                              ]
                            : [
                                "linear-gradient(45deg, #A0F1EA 0%, #7FD6E2 55%, #9EEAF9 100%)",
                                "linear-gradient(45deg, #84FAB0 0%, #8FD3F4 55%, #9EEAF9 100%)",
                              ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <Sparkles className="h-12 w-12 text-white" />
                    </motion.div>
                    <Button
                      variant="outline"
                      className={`mt-4 w-full ${
                        isDarkMode
                          ? "text-pink-400 border-pink-500 hover:bg-pink-900"
                          : "text-purple-700 border-purple-500 hover:bg-purple-100"
                      }`}
                      onClick={toggleTemperature}
                    >
                      {temperature === "warm"
                        ? "Aplicar Frio"
                        : "Aplicar Calor"}
                    </Button>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </section>

        <section className="text-center mb-20">
          <h3
            className={`text-3xl font-semibold mb-10 ${
              isDarkMode ? "text-pink-400" : "text-purple-800"
            }`}
          >
            Por Que Escolher ChromaBeautty?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Inovador",
                description:
                  "Tecnologia que muda de cor em reação à temperatura",
              },
              {
                title: "Expressivo",
                description:
                  "Múltiplos visuais em um único produto para criatividade máxima",
              },
              {
                title: "Alta Qualidade",
                description:
                  "Fórmulas premium para resultados duradouros e vibrantes",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`rounded-lg shadow-lg p-6 ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <h4
                  className={`text-xl font-semibold mb-2 ${
                    isDarkMode ? "text-pink-400" : "text-purple-700"
                  }`}
                >
                  {feature.title}
                </h4>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <motion.div
            className={`rounded-lg shadow-lg p-12 ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3
              className={`text-3xl font-semibold mb-6 text-center ${
                isDarkMode ? "text-pink-400" : "text-purple-800"
              }`}
            >
              Sobre a ChromaBeautty
            </h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {[
                "A ChromaBeautty é uma revolução no mundo da beleza com nossos produtos inovadores que mudam de cor dependendo da temperatura.",
                "Imagine ter unhas que revelam novos tons quando tocadas pelo frio ou calor, maquiagem que se adapta ao ambiente e até cabelos que se transformam com qualquer fonte de calor, como um secador ou uma mudança na temperatura.",
                "Nossos produtos inovadores incluem tintas, esmaltes e maquiagens para que você possa se reinventar da maneira que quiser!",
                "Na ChromaBeautty, você expressa sua personalidade em múltiplas cores, de uma forma única e surpreendente!",
                "Seja ousada, seja diferente, seja ChromaBeautty. 🌈",
              ].map((paragraph, index) => (
                <motion.p
                  key={index}
                  className={`mb-4 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <section className="text-center">
          <motion.div
            className={`rounded-lg p-12 ${
              isDarkMode ? "bg-pink-500" : "bg-purple-500"
            } text-white`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold mb-4">
              Pronta para se Transformar?
            </h3>
            <p className="text-xl mb-8">
              Junte-se à revolução ChromaBeautty e expresse sua personalidade em
              múltiplas cores!
            </p>
            <Button
              size="lg"
              variant="secondary"
              className={`${
                isDarkMode
                  ? "bg-white text-pink-500 hover:bg-gray-100"
                  : "bg-white text-purple-500 hover:bg-gray-100"
              }`}
            >
              Comprar Agora <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </section>
      </main>

      <footer
        className={`py-6 mt-20 ${
          isDarkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-600"
        }`}
      >
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 ChromaBeautty. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
