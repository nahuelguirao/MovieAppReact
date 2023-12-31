import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export function NavbarMobile({ isMenuOpen, handleMenuToggle }) {
    //Navbar for screens < 1000px
    return (
        <>
            <motion.img src='/menu-icon.png' alt='Menu icon' onClick={handleMenuToggle} animate={{ rotate: isMenuOpen ? 90 : 180 }} style={{ height: isMenuOpen ? 25 : 50 }} className='menuImg' />
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav key='navLinks' animate={{ opacity: [0, 1], scale: [0, 1] }} transition={{ delay: 0.3 }} className='open'>
                        <ul>
                            <Link to='/' onClick={handleMenuToggle}><li>Home</li></Link>
                            <Link to='/movies' onClick={handleMenuToggle}><li>Movies</li></Link>
                            <Link to='/tvseries' onClick={handleMenuToggle}><li>TV Series</li></Link>
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    )
}