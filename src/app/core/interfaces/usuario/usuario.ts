export interface CuentaUsuario {
  usuairo: Usuario;
  cuenta: Cuenta;
  tarjetaCredito: TarjetaCredito;
  tarjetaDebito: TarjetaDebito;
  prestamos: Array<Prestamo>;
}

export interface Usuario {
  idUsuario: number;
  nombre: string;
  apellido: string;
  email: string;
  direccion: string;
  fecha_nacimiento: Date;
  fecha_ultimo_acceso: string;
  fecha_creacion: string;
}

export interface Cuenta {
  idCuenta: number;
  numeroCuenta: string;
  saldo: string;
  fecha_apertura: string;
}

export interface TarjetaCredito {
  id_tarjeta_credito: number;
  numero_tarjeta: string;
  fecha_vencimiento: string;
  limite_credito: number;
  saldo_actual: number;
  fecha_corte: string;
}
export interface TarjetaDebito {
  id_tarjeta_debito: number;
  numero_tarjeta: string;
  fecha_vencimiento: string;
}
export interface Prestamo {
  id_prestamo: number;
  monto: number;
  tasa_interes: number;
  plazo: number;
  fecha_desembolso: Date;
  fecha_pago: Date;
  pago_mensual: number;
  pagos_realizados: number;
  atraso: boolean;
}
