class Propiedades {
    constructor(preferencia, tipo, zona, ambientes, valor, imagen, descripcion) {
        this.preferencia = preferencia
        this.tipo = tipo
        this.zona = zona
        this.ambientes = ambientes
        this.valor = valor
        this.imagen = imagen
        this.descripcion = descripcion
    }
}


const propiedad1 = new Propiedades("Casa", "Venta", "Merlo", "2", 120000, "Propiedad9.jpg", "Excelente casa en venta, ubicada en exclusiva zona, planes a pagar en dolares.")
const propiedad2 = new Propiedades("Depto", "Venta", "San antonio de Padua", "2", 250000, "Propiedad8.jpg", "Hermosa propiedad en venta. La misma se encuentra, ubicada en barrio cerrado")
const propiedad3 = new Propiedades("Casa", "Venta", "Merlo", "3", 180000, "Propiedad3.jpg", "Propiedad a la venta. A estrenar y con detalles de categoría, se aceptan permutas.")
const propiedad4 = new Propiedades("Depto", "Venta", "San antonio de Padua", "3", 300000, "Propiedad10.jpg", "Casa en venta. Ubicada en el centro comercial de la zona, con un diseño de primera calidad.")
const propiedad5 = new Propiedades("Casa", "Venta", "Merlo", "4", 410000, "Propiedad 2.jpg", "Propiedad en venta en barrio cerrado. Cuenta con extenso patio, y gran variedad de ambientes.")
const propiedad6 = new Propiedades("Depto", "Alquiler", "San antonio de Padua", "2", 72000, "Propiedad6.jpg", "Propiedad de lujo en alquiler, lista para tomar posesión con todo amoblado.")
const propiedad7 = new Propiedades("Casa", "Alquiler", "Merlo", "2", 95000, "Propiedad4.jpg", "Se alquila con opción a compra. Lista para habitar, la propiedad se encuentra amoblada, y en perfecto estado de conservación.")
const propiedad8 = new Propiedades("Depto", "Alquiler", "San antonio de Padua", "3", 82000, "Propiedad12.jpg", "Propiedad en alquiler, con ambientes amplios perfectamente distribuidos para mayor comodidad.")
const propiedad9 = new Propiedades("Depto", "Alquiler", "Merlo", "3", 127000, "Propiedad11.jpg", "Propiedad de gran calidad, ubicada en uno de los sectores mas exclusivos de la zona.")
const propiedad10 = new Propiedades("Casa", "Alquiler", "San antonio de Padua", "4", 180000, "Propiedad 7.jpg", "Alquiler de propiedad en zona residencial de primera,con amenities como: pileta, gimnasio, y seguridad 24 horas")

const totalPropiedades = [propiedad1, propiedad2, propiedad3, propiedad4, propiedad5, propiedad6, propiedad7, propiedad8, propiedad9, propiedad10]

function mostrarResultados() {
    const IdPreferencia = document.getElementById("idPreferencia").value
    const idTipo = document.getElementById("idTipo").value
    const idZona = document.getElementById("idZona").value
    const idAmbientes = document.getElementById("idAmbientes").value

    let aGuardar = {
        IdPreferencia: IdPreferencia,
        idTipo: idTipo,
        idZona: idZona,
        idPropiedad: idAmbientes,
    }
    localStorage.setItem("guardado", JSON.stringify(aGuardar))

    let Resultados = []
    totalPropiedades.forEach(propiedad => {
        if (IdPreferencia == propiedad.preferencia && idTipo == propiedad.tipo && idZona == propiedad.zona && idAmbientes == propiedad.ambientes) {
            Resultados.push(propiedad)
        }

    })

    const idContainer = document.getElementById("idResultados")
    idContainer.innerHTML = ""
    Resultados.forEach(resultado => {
        idContainer.innerHTML += `
        <div class="col-sm-12 col-md-6 col-lg-4 main__col">
            <div id="idCard1" class="card main__card h-100">
                <img src="./imgs/${resultado.imagen}" class="card-img-top main__img" alt="..." />
                <div class="card-body">
                    <p class="card-text main__cardtext">${resultado.descripcion}
                    </p>
                    <small>${resultado.valor}</small>
                </div>
            </div>
        </div>`
    })
}


const btnSubmit = document.getElementById("idSubmit")

btnSubmit.addEventListener("click", (event) => {
    mostrarResultados()
    event.preventDefault()
})


const preferenciaGuardada = JSON.parse(localStorage.getItem("guardado")) || ""
preferenciaGuardada.IdPreferencia ? document.getElementById("idPreferencia").value = preferenciaGuardada : false
preferenciaGuardada.idTipo ? document.getElementById("idTipo").value = preferenciaGuardada : false
preferenciaGuardada.idZona ? document.getElementById("idZona").value = preferenciaGuardada : false
preferenciaGuardada.idAmbientes ? document.getElementById("idAmbientes").value = preferenciaGuardada : false

mostrarResultados()






