import { Injectable } from '@angular/core';
import { Cuenta } from '../../interfaces/cuentas/cuentas';

@Injectable({
  providedIn: 'root',
})
export class InicioCuentaService {
  cuentas: Array<Cuenta> = [
    {
      imagen:
        '',
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
        '',
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
        '',
      titulo: 'Tarjeta de credito de oro',
      tipo: '2',
      puntos: [
        'El ingreso aproximado para acceder a este tipo de tarjetas es de $20,000.00 mensuales, pero varía dependiendo de la institución.',
        'El límite de crédito para esta tarjeta es mayor, así como los descuentos y las ofertas especiales.',
      ],
    },
    {
      imagen:
        '',
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
        '',
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
        '',
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
        '',
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
