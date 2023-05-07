export default async  function api  ()  {

const gerador = Math.floor ( Math.random () * (957 - 2 + 1) + 1)


        const req = await fetch (`https://api.themoviedb.org/3/movie/${gerador}?api_key=627b6572a9d35584a184d9ca8223dfed`)
        .then (resolve => resolve.json ())
        .catch (error => error.json ())
       


      return req
}

