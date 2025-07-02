document.addEventListener('DOMContentLoaded', () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || []

    let total = 0
    carrito.forEach(e => {
        let contador = document.getElementById('contadoCarrito')
        contador.textContent = carrito.length

        if (carrito.length > 0) {
            document.getElementById('productos-none')
                .style.display = 'none'


            let ul = document.createElement('ul')
            let article = document.createElement('article')
            article.classList.add('lista-carrito')

            let precio = document.createElement('p')
            let btnBorrar = document.createElement('button')
            

            btnBorrar.addEventListener('click', () => {
                let carrito = JSON.parse(localStorage.getItem("carrito")) || []
                carrito.splice(e, 1)

                localStorage.setItem("carrito", JSON.stringify(carrito))
                alert('Producto eliminado con exito')
                window.location.reload()


            })

            btnBorrar.textContent = 'Eliminar'


            let li = document.createElement('li')
            let h3 = document.createElement('h3')
            let img = document.createElement('img')

            article.appendChild(ul)
            ul.appendChild(li)
            li.appendChild(h3)
            li.appendChild(img)
            li.appendChild(precio)
            li.appendChild(btnBorrar)
            img.src = e.images[0]
            h3.textContent = e.title

            precio.textContent = e.price
            total += e.price

            document.getElementById('main-content-carrito').appendChild(article)

        }


    });
    //muestra el total de toda la compra
    let totalFinal = document.createElement('div')
    let precioTotal = document.createElement('p')
    let btnComprar = document.createElement('button')
    let btnVaciar = document.createElement('button')

    btnVaciar.textContent = 'Vaciar carrito'
    btnVaciar.classList.add('btn-vaciar')

    btnComprar.textContent = 'Finalizar compra'
    btnComprar.classList.add('btn-fin')

    btnVaciar.addEventListener('click',()=>{
        if (carrito.length == 0) {
            alert('No hay nada en el carrito')
        } else {
            alert('Carrito vaciado')
            localStorage.clear()
            window.location.reload()
        }
    })


    btnComprar.addEventListener('click', () => {
        if (carrito.length == 0) {
            alert('No hay nada en el carrito')
        } else {
            alert('Compra finalizada con exito')
            localStorage.clear()
            window.location.href = '../index.html'
        }
    })
    totalFinal.classList.add('total')
    precioTotal.textContent = `Total: $${total.toFixed(2)}`

    totalFinal.appendChild(precioTotal)
    totalFinal.appendChild(btnVaciar)

    totalFinal.appendChild(btnComprar)

    document.getElementById('main-content-carrito').appendChild(totalFinal)





})