import React, { useState } from 'react';
import {
  StyledSideMenu,
  StyledMenuButton,
  StyledInnerNav,
  StyledOverlay
} from './styles';
import { CgMenuMotion, CgClose } from 'react-icons/cg';
import {
  RiStackLine,
  RiLineChartLine,
  RiMoonLine,
  RiSunLine,
  RiGithubLine
} from 'react-icons/ri';
import { motion } from 'framer-motion';

type SideMenu = {
  theme: string;
  toggleTheme: () => void;
};

const SideMenu: React.FC<SideMenu> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpenSideMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <StyledSideMenu
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, x: 0 },
          closed: { opacity: 0, x: '-100%' }
        }}
        transition={{ duration: 0.5 }}
      >
        <StyledInnerNav>
          <ul>
            <motion.li whileTap={{ scale: 1.1 }}>
              <a href="#">
                <RiStackLine />
                Overview
              </a>
            </motion.li>
            <motion.li whileTap={{ scale: 1.1 }}>
              <a href="#">
                <RiLineChartLine />
                Charts
              </a>
            </motion.li>
          </ul>
          <section>
            <motion.button
              type="button"
              onClick={toggleTheme}
              whileTap={{ scale: 1.1 }}
            >
              {theme === 'light' ? (
                <>
                  <RiSunLine />
                  {`${theme} mode`}
                </>
              ) : (
                <>
                  <RiMoonLine />
                  {`${theme} mode`}
                </>
              )}
            </motion.button>
            <a
              href="https://github.com/rafaelmfranca/react-expenses-control"
              target="_blank"
            >
              <RiGithubLine />
              Github
            </a>
          </section>
        </StyledInnerNav>
      </StyledSideMenu>
      <StyledMenuButton
        onClick={handleIsOpenSideMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <CgClose /> : <CgMenuMotion />}
      </StyledMenuButton>
      <StyledOverlay
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { visibility: 'visible' },
          closed: { visibility: 'hidden' }
        }}
        transition={{ duration: 0.5 }}
        onClick={handleIsOpenSideMenu}
      />
    </>
  );
};

export default SideMenu;
