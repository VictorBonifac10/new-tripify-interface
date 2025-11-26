import { Route, Routes } from 'react-router-dom';
import { Cart, Home, Login, Register, Pacotes, Profile } from '../pages'

export function Router() {
    return (

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pacotes' element={<Pacotes />} />
            <Route path='/carrinho' element={<Cart />} />
            <Route path='/perfil' element={<Profile />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cadastro' element={<Register />} />
        </Routes>

    )
}