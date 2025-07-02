document.addEventListener('DOMContentLoaded', () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || []
    const URL = 'https://dummyjson.com/products/category/sports-accessories?limit=20'

    let contador = document.getElementById('contadoCarrito')
    contador.textContent = carrito.length
    
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            const render = () => {
                for (const item of data.products) {
                    let article = document.createElement('article')
                    article.classList.add('article-content')
                    let titulo = document.createElement('h3')
                    let img = document.createElement('img')
                    let precio = document.createElement('p')

                    titulo.textContent = item.title
                    img.src = item.images[0]
                    precio.textContent = `$${item.price}`

                    let btnAgregar = document.createElement('button')
                    btnAgregar.textContent = 'Agregar'

                    btnAgregar.addEventListener('click', () => {
                        alert('Producto agregado con exito')
                        agregarcarrito()

                    })
                    const agregarcarrito = ()=>{
                        carrito.push(item)
                        localStorage.setItem('carrito', JSON.stringify(carrito))
                        contador.textContent = carrito.length
                    }

                    let contador = document.getElementById('contadoCarrito')
                    contador.textContent = carrito.length

                    article.appendChild(titulo)
                    article.appendChild(img)
                    article.appendChild(precio)
                    article.appendChild(btnAgregar)

                    document.getElementById('main-content')
                        .appendChild(article)
                }
            }
            render()
        })
        .catch((err) => console.log('Error:', err))
}) 