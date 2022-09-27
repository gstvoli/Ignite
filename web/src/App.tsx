import { useState, useEffect} from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import './styles/main.css';

import logoImg from './assets/logo-nlw-esports.svg'; 
import { CreateAdBanner } from './components/CreateAdBanner';
import { GameBanner } from './components/GameBanner';
import { GameController } from 'phosphor-react';
import { Input } from './components/Form/input';
import { CreateAdModal } from './components/CreateAdModal';
import axios from 'axios';
interface Game {
  id: string,
  title: string,
  bannerUrl: string,
  _count: {
    ads: number;
  }
}

function App() {
  // a variável games é um array de objetos com o formato da interface
  const [games, setGames] = useState<Game[]>([]);

  // o useEffect (efeito colateral) é uma função com 2 parametros
  // o primeiro é qual o efeito colateral (qual a função)
  //o segundo é quando devo executar o efeito colateral (se deixar vazia, o código do efeito roda 1x só)
  useEffect(() => {
    axios('http://localhost:3333/games').then(response => {
        setGames(response.data)
      })
  }, [])

  return  (
    <div className='max-w-[1260px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {/* map percorre um array e retorna algo de dentro do array*/}
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.ads}/>
          )
        })}
      </div>
      
      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />

      </Dialog.Root>
    </div>

  )
}

export default App
