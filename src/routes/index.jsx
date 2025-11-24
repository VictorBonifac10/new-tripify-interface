import { Route, Routes } from 'react-router-dom';
import { Cart, Home, Pacotes, Profile } from '../pages'

export function Router() {
    return (

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pacotes' element={<Pacotes />} />
            <Route path='/carrinho' element={<Cart />} />
            <Route path='/perfil' element={<Profile />} />
        </Routes>

    )
}