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
  RiGithubLine,
  RiLogoutBoxLine
} from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

type SideMenu = {
  theme: string;
  toggleTheme: () => void;
};

const SideMenu: React.FC<SideMenu> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleIsOpenSideMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <StyledSideMenu
            key="side-menu"
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            exit={{ opacity: 0, x: '-100%' }}
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
                <motion.button
                  type="button"
                  onClick={handleSignOut}
                  whileTap={{ scale: 1.1 }}
                >
                  <>
                    <RiLogoutBoxLine />
                    Logout
                  </>
                </motion.button>
              </section>
            </StyledInnerNav>
          </StyledSideMenu>
        )}
      </AnimatePresence>

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
