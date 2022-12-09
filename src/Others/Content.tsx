import { motion } from "framer-motion";
import { useContext } from "react";
import { ContentContext } from "./Context/ContentContext";
import IntroductionSection from "./IntroductionSection";

export function Content() {
  // const { switchTheme, theme } = useContext(ThemeContext);

  const { site_info } = useContext(ContentContext);

  if (site_info) {
    return (
      <div className="theme-case-content">
        <motion.div
          className="content-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 0.2,
            type: "spring",
          }}
        >
          <motion.div
            className="hero-section-container"
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <IntroductionSection />
            <div className="hero-section-item">
              <img src={site_info.img} alt="img" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    );
  } else {
    return null;
  }
}
