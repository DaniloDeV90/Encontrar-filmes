import { useEffect, useState } from 'react'
import api from "./api/API"
import essivege from "./imagens/shuffle.svg"
import './App.css'

function App() {
const [apiResult,setApi] = useState ()
const [imgs, setImgs] = useState ()



  const Film = async () => {
let req;

  do {
    req = await api ()
  } while (!req.title)
 

 

 
setApi (req)  

const req2 = await fetch (`https://image.tmdb.org/t/p/w200/${req.poster_path}`).then (resolve => resolve)

setImgs (req2)
  }
   

  return (
<div className="contem">
  {console.log (apiResult)}
<img src={essivege} alt=""  width={"100px"}/>
<h1>Não sabe o que assistir?</h1>


<div className="container">
<div className="poster">

{ imgs &&  <img src={imgs.url} alt="" />   }

</div>
<div className="titulos">
  

{apiResult &&  <h3>{apiResult.title}</h3>  }

<ul>

{apiResult && apiResult.genres.map ((generos,index) => (
<li key={index}>{generos.name} </li>
)) }
</ul>
{apiResult &&  <p>{apiResult.overview} </p> }
{apiResult &&  <p>Lançamento: {apiResult.release_date}</p>  }
</div>

</div>
<button onClick={Film}>  <img src={essivege} width={"35px"} alt="" />  ENCONTRAR FILME</button>
<p id='encontrar'>Clique em "Encontrar filme" que traremos informações sobre algum filme para você assistir hoje.</p>

</div>
  )
}

export default App
