const productos = [
    {
        "id": 1,
        "nombre": "Botella de acero inoxidable 500ml",
        "imagen": "./Img/botella-agua-acero-inoxidable-500-ml-sublimacion.jpg",
        "images": ["./Img/Botella de plástico 1L.jpg", "./Img/Botella térmica 750ml.jpeg", "./Img/botella-agua-acero-inoxidable-500-ml-sublimacion.jpg"],
        "precio": 12000,
        "descripcion": "Botella de acero inoxidable de 500ml ideal para llevar tus bebidas frías o calientes, El precio depende de la cotización realizada por el cliente.",
        "estado": "Nuevo",
        "categoria": "Botellas",
        "stock": "Disponible",
        "tiempoEntrega": 7,
        "gastosEnvio": 75,
        "opcionesEntrega": "envío",
        "garantia": "Garantía de 1 año para defectos de fabricación",
        "reseñas": [
            {
                "autor": "Roberto Arguedas",
                "comentario": "Excelente calidad, muy resistente.⭐⭐⭐⭐⭐"
            },
            {
                "autor": "Maria Jimenez",
                "comentario": "Buen producto, pero un poco pesado.⭐⭐⭐⭐"
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 2,
        "nombre": "Botella de plástico 1L",
        "imagen": "./Img/Botella de plástico 1L.jpg",
        "images": ["./Img/Botella de plástico 1L.jpg", "./Img/Botella térmica 750ml.jpeg", "./Img/botella-agua-acero-inoxidable-500-ml-sublimacion.jpg"],
        "precio": 8000,
        "descripcion": "Botella de plástico de 1L, ligera y fácil de transportar, El precio depende de la cotización realizada por el cliente.",
        "estado": "Nuevo",
        "categoria": "Botellas",
        "stock": "Disponible",
        "tiempoEntrega": 5,
        "gastosEnvio": 50,
        "opcionesEntrega": "envío y recogida en tienda",
        "garantia": "Garantía de 2 meses",
        "reseñas": [
            {
                "autor": "Carlos Arguedas",
                "comentario": "Ideal para el día a día.⭐⭐⭐⭐"
            },
            {
                "autor": "Mario Sanchaez",
                "comentario": "Cumple con lo esperado.⭐⭐⭐"
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 3,
        "nombre": "Botella térmica 750ml",
        "imagen": "./Img/Botella térmica 750ml.jpeg",
        "images": ["./Img/Botella de plástico 1L.jpg", "./Img/Botella térmica 750ml.jpeg", "./Img/botella-agua-acero-inoxidable-500-ml-sublimacion.jpg"],
        "precio": 8500,
        "descripcion": "Botella térmica de 750ml que mantiene la temperatura de tus bebidas por horas, El precio depende de la cotización realizada por el cliente.",
        "estado": "Nuevo",
        "categoria": "Botellas",
        "stock": "Disponible",
        "tiempoEntrega": 6,
        "gastosEnvio": 85,
        "opcionesEntrega": "envío",
        "garantia": "Garantía de 2 meses",
        "reseñas": [
            {
                "autor": "Marcos Perez",
                "comentario": "Excelente retención de calor.⭐⭐⭐⭐⭐"
            },
            {
                "autor": "Jesus Jimenez",
                "comentario": "Buena capacidad y diseño.⭐⭐⭐⭐"
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 4,
        "nombre": "Lapicero promocional azul",
        "imagen": "./Img/Lapicero promocional azu.jpg",
        "images": ["./Img/Lapicero promocional azu.jpg", "./Img/Lapicero metálico negro.png", "./Img/Lapicero reciclable verde.jpg"],
        "precio": 2000,
        "descripcion": "Lapicero promocional de tinta azul personalizable con tu logo, El precio depende de la cotización realizada por el cliente.",
        "estado": "Nuevo",
        "categoria": "Lapiceros",
        "stock": "Disponible",
        "tiempoEntrega": 3,
        "gastosEnvio": 30,
        "opcionesEntrega": "envío",
        "garantia": "Garantía de 1 mese",
        "reseñas": [
            {
                "autor": "Pedro Arguedas",
                "comentario": "Muy buen acabado, perfecto para publicidad.⭐⭐⭐⭐"
            },
            {
                "autor": "Martha Ramirez",
                "comentario": "Me gustó mucho, buena calidad.⭐⭐⭐⭐⭐"
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 5,
        "nombre": "Lapicero metálico negro",
        "imagen": "./Img/Lapicero metálico negro.png",
        "images": ["./img/lapiceroNegro.jpg", "./img/lapiceroAzul.jpg", "./Img/Lapicero reciclable verde.jpg"],
        "precio": 5000,
        "descripcion": "Lapicero metálico de tinta negra, ideal para regalos corporativos, El precio depende de la cotización realizada por el cliente.",
        "estado": "Nuevo",
        "categoria": "Lapiceros",
        "stock": "Disponible",
        "tiempoEntrega": 2,
        "gastosEnvio": 40,
        "opcionesEntrega": "envío y recogida en tienda",
        "garantia": "Garantía de 1 mes",
        "reseñas": [
            {
                "autor": "Sara Arguedas",
                "comentario": "Muy elegante, ideal para regalar.⭐⭐⭐⭐⭐"
            },
            {
                "autor": "Jorge Jimenez",
                "comentario": "Excelente presentación.⭐⭐⭐⭐"
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 6,
        "nombre": "Lapicero reciclable verde",
        "imagen": "./Img/Lapicero reciclable verde.jpg",
        "images": ["./img/lapiceroVerde.jpg", "./img/lapiceroRojo.jpg", "./img/lapiceroAzul.jpg"],
        "precio": 3000,
        "descripcion": "Lapicero ecológico hecho de material reciclado, ideal para eventos verdes, El precio depende de la cotización realizada por el cliente.",
        "estado": "Nuevo",
        "categoria": "Lapiceros",
        "stock": "Disponible",
        "tiempoEntrega": 4,
        "gastosEnvio": 35,
        "opcionesEntrega": "envío",
        "garantia": "Garantía de 1 mes",
        "reseñas": [
            {
                "autor": "Felipe Arguedas",
                "comentario": "Perfecto para eventos eco-friendly.⭐⭐⭐⭐"
            },
            {
                "autor": "Maria Jimenez",
                "comentario": "Buena idea y calidad.⭐⭐⭐⭐⭐"
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 7,
        "nombre": "Uniforme deportivo básico",
        "imagen": "./Img/Uniforme Basico.jpg",
        "images": ["./img/uniformeRojo.jpg", "./img/uniformeAzul.jpg", "./img/uniformeVerde.jpg"],
        "precio": 12500,
        "descripcion": "Uniforme deportivo básico, cómodo y personalizable, El precio depende de la cotización realizada por el cliente.",
        "estado": "Nuevo",
        "categoria": "Uniformes",
        "stock": "Disponible",
        "tiempoEntrega": 10,
        "gastosEnvio": 150,
        "opcionesEntrega": "envío",
        "garantia": "Garantía de 6 meses",
        "reseñas": [
            {
                "autor": "Paula Castro",
                "comentario": "Excelente para entrenar.⭐⭐⭐⭐"
            },
            {
                "autor": "Rosa Jimenez",
                "comentario": "Buena relación calidad-precio.⭐⭐⭐⭐⭐"
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 8,
        "nombre": "Uniforme deportivo premium",
        "imagen": "./Img/Uniforme deportivo premium.jpg",
        "images": ["./img/uniformeNegro.jpg", "./img/uniformeAzul.jpg", "./img/uniformeRojo.jpg"],
        "precio": 15000,
        "descripcion": "Uniforme deportivo premium con tecnología de secado rápido, El precio depende de la cotización realizada por el cliente.",
        "estado": "Nuevo",
        "categoria": "Uniformes",
        "stock": "Disponible",
        "tiempoEntrega": 8,
        "gastosEnvio": 170,
        "opcionesEntrega": "envío",
        "garantia": "Garantía de 1 mes",
        "reseñas": [
            {
                "autor": "Luis Arguedas",
                "comentario": "Gran calidad y muy cómodo.⭐⭐⭐⭐⭐"
            },
            {
                "autor": "Esteban Jimenez",
                "comentario": "Lo recomiendo para profesionales.⭐⭐⭐⭐"
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 9,
        "nombre": "Camisas Polo",
        "imagen": "./Img/camisas-tipo-polo.jpg",
        "images": ["./img/uniformeNegro.jpg", "./img/uniformeAzul.jpg", "./img/uniformeRojo.jpg"],
        "precio": 8500,
        "descripcion": "Camisas polo de vestir, El precio depende de la cotización realizada por el cliente.",
        "estado": "Nuevo",
        "categoria": "Camisa",
        "stock": "Disponible",
        "tiempoEntrega": 8,
        "gastosEnvio": 170,
        "opcionesEntrega": "envío",
        "garantia": "Garantía de 1 mes",
        "reseñas": [
            {
                "autor": "Oscar solis",
                "comentario": "Gran calidad y muy cómodo.⭐⭐⭐⭐⭐"
            },
            {
                "autor": "Alonso Hernandez",
                "comentario": "Lo recomiendo para profesionales.⭐⭐⭐⭐"
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 10,
        "nombre": "Tarjetas de Presentación",
        "imagen": "./Img/TarjetasPresentacion.jpeg",
        "images": ["./img/tarjeta-frontal.jpg", "./img/tarjeta-dorso.jpg", "./img/tarjeta-ejemplo.jpg"],
        "precio": 5000,
        "descripcion": "Tarjetas de presentación personalizadas con acabados profesionales. Perfectas para destacar tu negocio o proyecto, El precio depende de la cotización realizada por el cliente.",
        "estado": "Nuevo",
        "categoria": "Impresión Gráfica",
        "stock": "Disponible",
        "tiempoEntrega": 5,
        "gastosEnvio": 100,
        "opcionesEntrega": "envío",
        "garantia": "Garantía de 1 mes",
        "reseñas": [
            {
                "autor": "Ana Solís",
                "comentario": "Excelente calidad, el diseño es exactamente como lo imaginé. ⭐⭐⭐⭐⭐"
            },
            {
                "autor": "Carlos Méndez",
                "comentario": "Recomiendo este servicio, tarjetas con acabado premium. ⭐⭐⭐⭐"
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 11,
        "nombre": "Manteles y Portacubiertos Personalizados",
        "imagen": "./Img/portacubiertos&Manteles.jpg",
        "images": ["./img/mantel-ejemplo1.jpg", "./img/portacubiertos-ejemplo2.jpg", "./img/set-mantel-portacubiertos.jpg"],
        "precio": 5000,
        "descripcion": "Manteles y portacubiertos personalizados con diseños únicos, ideales para eventos especiales, restaurantes o para darle un toque personalizado a tu mesa. El precio depende de la cotización realizada por el cliente.",
        "estado": "Nuevo",
        "categoria": "Impresión Gráfica",
        "stock": "Disponible",
        "tiempoEntrega": 7,
        "gastosEnvio": 150,
        "opcionesEntrega": "envío",
        "garantia": "Garantía de 1 mes",
        "reseñas": [
            {
                "autor": "María López",
                "comentario": "El diseño de los manteles y portacubiertos fue increíble, justo lo que necesitaba. ⭐⭐⭐⭐⭐"
            },
            {
                "autor": "Pedro García",
                "comentario": "La calidad es excelente, los volveré a pedir para futuros eventos. ⭐⭐⭐⭐"
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 12,
        "nombre": "Posters Promocionales",
        "imagen": "./Img/Impresion_Grafica.jpeg",
        "images": ["./img/poster-ejemplo1.jpg", "./img/poster-ejemplo2.jpg", "./img/poster-ejemplo3.jpg"],
        "precio": "(Depende de la cotización)",
        "descripcion": "Posters impresos en papel de alta calidad, perfectos para publicidad, eventos y campañas de marketing, El precio depende de la cotización realizada por el cliente.",
        "estado": "Nuevo",
        "categoria": "Impresión Gráfica",
        "stock": "Disponible",
        "tiempoEntrega": 7,
        "gastosEnvio": 150,
        "opcionesEntrega": "envío",
        "garantia": "Garantía de 1 mes",
        "reseñas": [
            {
                "autor": "Sofía Castillo",
                "comentario": "Los posters llegaron en perfecto estado y son de excelente calidad. ⭐⭐⭐⭐⭐"
            },
            {
                "autor": "Javier Morales",
                "comentario": "Impresión clara y colores vibrantes. Muy buena opción. ⭐⭐⭐⭐"
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    }    
];
