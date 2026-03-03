import { motion } from "framer-motion";
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";

export default function Resume() {
  const resumeFile = "/OmkarMadchetti_Resume(T).pdf";

  return (
    <div className="border-b border-neutral-900 pb-16">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl"
      >
        My <span className="text-neutral-500">Resume</span>
      </motion.h1>

      <div className="flex flex-col items-center gap-6 px-4">
        {/* PDF Viewer Card */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.7 }}
          className="relative w-full max-w-3xl"
        >
          {/* Glow behind card */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 opacity-40 blur-lg" />

          {/* Card */}
          <div className="relative rounded-2xl overflow-hidden border border-neutral-700 bg-neutral-900 shadow-2xl">
            {/* Top bar — like a browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-neutral-800 border-b border-neutral-700">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-3 text-xs text-neutral-400 truncate">
                OmkarMadchetti_Resume.pdf
              </span>
            </div>

            {/* PDF embed */}
            <iframe
              src={`${resumeFile}#view=FitH&toolbar=0&navpanes=0`}
              title="Omkar Madchetti Resume"
              className="w-full h-[410px] md:h-[780px]"
            />
          </div>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href={resumeFile}
            download="OmkarMadchetti_Resume.pdf"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold text-sm hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-purple-900/40"
          >
            <FaDownload />
            Download Resume
          </a>
          <a
            href={resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-purple-500 text-purple-400 text-sm font-semibold hover:bg-purple-500/10 active:scale-95 transition-all"
          >
            <FaExternalLinkAlt />
            Open in New Tab
          </a>
        </motion.div>
      </div>
    </div>
  );
}
