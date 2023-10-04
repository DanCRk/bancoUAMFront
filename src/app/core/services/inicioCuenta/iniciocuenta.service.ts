import { Injectable } from '@angular/core';
import { Cuenta } from '../../interfaces/cuentas/cuentas';

@Injectable({
  providedIn: 'root',
})
export class InicioCuentaService {
  cuentas: Array<Cuenta> = [
    {
      imagen:
        'https://tubalboaconsentido.gob.pa/wp-content/uploads/2022/05/banca_en_linea-1024x583.jpeg',
      titulo: 'Cuenta Basica',
      tipo: '1',
      puntos: [
        'La cuenta segura y accesible para administrar tu dinero',
        'Realiza transferencias con BBUAM México',
        'Consulta tu saldo en BBUAM México sin costo',
      ],
    },
  ];

  tarjetasCredito: Array<Cuenta> = [
    {
      imagen:
        'https://www.afirme.com/dam/jcr:8670892f-11ec-4ab7-b71d-6c2acc0a6456/Plastico%20B%C2%A0sica%20ch.png',
      titulo: 'Tarjeta credito clasica',
      tipo: '2',
      puntos: [
        'Son ideales para las personas que tienen ingresos de entre 5 y 10 mil pesos mensuales y para quienes quieren tener su primera tarjeta.',
        'Con este tipo de tarjetas de crédito puedes empezar a crear tu historial crediticio.',
        'Consulta tu saldo en BBUAM México sin costo',
      ],
    },
    {
      imagen:
        'https://latam.mastercard.com/content/dam/public/mastercardcom/lac/mx/home/consumidores/encontrar-una-tarjeta/tarjetas-de-credito/tarjeta-gold/tarjeta-credito-gold-1280x720.jpg',
      titulo: 'Tarjeta de credito de oro',
      tipo: '2',
      puntos: [
        'El ingreso aproximado para acceder a este tipo de tarjetas es de $20,000.00 mensuales, pero varía dependiendo de la institución.',
        'El límite de crédito para esta tarjeta es mayor, así como los descuentos y las ofertas especiales.',
      ],
    },
    {
      imagen:
        'data:image/jpeg;base64,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',
      titulo: 'Tarjeta de credito platino',
      tipo: '2',
      puntos: [
        'Para acceder a este tipo de tarjetas requieres un ingreso mensual de alrededor de $50,000.00 mensuales.',
        'Esta tarjeta además de contar con mayores descuentos y promociones te da acceso a zonas exclusivas, como en los aeropuertos o en eventos y festivales.',
      ],
    },
  ];

  prestamos: Array<Cuenta> = [
    {
      imagen:
        'https://emprendepyme.net/wp-content/uploads/2023/03/aceptar-adelanto-de-sueldo.jpg',
      titulo: 'Adelanto de sueldo',
      tipo: '3',
      puntos: [
        '1% en tasa de interes',
        'Contratacion disponible las 24 horas del dia',
        'El dinero se deposita de inmediato a tu cuenta',
      ],
    },
    {
      imagen:
        'https://www.bbva.mx/content/dam/public-web/mexico/photos/Card_destacada_nomina.im1601395263762im.jpg?imwidth=768',
      titulo: 'Crédito de nómina',
      tipo: '3',
      puntos: [
        'uedes obtener un préstamo con beneficios exclusivos, si tienes tu nómina en BBUAM.',
        'Sin comisión por apertura',
        'Tramite facil y rapido',
      ],
    },
    {
      imagen:
        'https://www.bbva.mx/content/dam/public-web/mexico/photos/Card_destacada_nomina.im1601395263762im.jpg?imwidth=768',
      titulo: 'Préstamo Personal Inmediato',
      tipo: '3',
      puntos: [
        'Plazos de 6 hasta 72 meses',
        'Sin cobro de seguro',
        'Sin aval ni garantia',
      ],
    },
  ];
}
