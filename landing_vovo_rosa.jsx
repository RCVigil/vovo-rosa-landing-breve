import { motion } from "framer-motion";
import logo from "./VovóRosaLogoFTransparente.svg";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 to-yellow-50">
      {/* Logo animado */}
      <motion.img
        src={logo}
        alt="Vovó Rosa Pães Artesanais"
        className="w-56 h-auto mb-8 drop-shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Texto principal */}
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-gray-800 text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        🌸 Em breve novidades da <br />
        <span className="text-pink-600">Vovó Rosa Pães Artesanais</span>
      </motion.h1>

      {/* Botão WhatsApp */}
      <motion.a
        href="https://wa.me/5512996055505"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 px-6 py-3 bg-green-500 text-white font-semibold rounded-2xl shadow-lg hover:bg-green-600 transition"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        💬 Fale com a Vovó Rosa
      </motion.a>

      {/* Rodapé */}
      <p className="mt-10 text-gray-600 text-sm">© {new Date().getFullYear()} Vovó Rosa Pães Artesanais</p>
    </div>
  );
}
