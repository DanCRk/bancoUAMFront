import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu/menu.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit{

  contenidos=[
    {
      titulo:"¿Estás protegiendo lo que más amas?",
      subtitulo:"Descubre nuestro Seguro de Vida.",
      imagen:"assets/img/inicioComponent1.png",
      descripcion:"La vida está llena de incertidumbres, pero tu preocupación por el futuro de tus seres queridos no debería ser una de ellas. Con nuestro Seguro de Vida, puedes tener la tranquilidad de saber que estás brindando seguridad financiera a tu familia en caso de lo inesperado. Nuestro seguro de vida ofrece: ",
      ofrece:["Protección Financiera","Paz Mental","Asesoramiento Profesional"]
    },
    {
      titulo:"En tu cumpleaños te regalamos la comida",
      subtitulo:"En el restaurante de tu preferencia",
      imagen:"assets/img/inicioComponent2.jpg",
      descripcion:"En BBUAM nos importas, por eso tenemos el gusto de pagar tu comida el dia de tu cumpleaños, consulta terminos y condiciones",
    },
    {
      titulo:"Somos un banco que no discrimina",
      subtitulo:"Todos son bienvenidos",
      imagen:"assets/img/inicioComponent3.jpg",
      descripcion:"Nuestra visión de inclusión va más allá de las cifras y los números. Celebramos la diversidad de nuestros clientes y empleados, y estamos comprometidos con crear un espacio seguro y acogedor para todas las orientaciones sexuales e identidades de género.",
    },
    {
      titulo:"Descubre una Nueva Era de Inversiones con Nuestro Banco",
      subtitulo:"Tus inversiones son tratadas con el maximo cuidado",
      imagen:"assets/img/inicioComponent4.jpg",
      descripcion:"En BBUAM, creemos en el poder de la innovación financiera y en ofrecer a nuestros clientes oportunidades excepcionales para construir un futuro sólido y próspero. Es por eso que estamos emocionados de presentarte el emocionante mundo de las criptomonedas.",
    },
    {
      titulo:"¡Vive la Música en Grande!",
      subtitulo:"Paga tus Conciertos con Nuestra Tarjeta",
      imagen:"assets/img/inicioComponent5.png",
      descripcion:"En BBUAM, entendemos la importancia de disfrutar de momentos inolvidables, como conciertos en vivo, sin preocuparte por los detalles financieros. Es por eso que estamos emocionados de presentarte nuestra tarjeta de crédito, la puerta de entrada a una experiencia musical sin complicaciones.",
    },
    {
      titulo:"Nosotros te prestamos para tu casa",
      subtitulo:"Cumple tus sueños de tener tu propio hogar",
      imagen:"assets/img/inicioComponent6.jpg",
      descripcion:"En BBUAM, hacemos realidad tu sueño de tener una casa, adquiere uno de nuestros prestamos, con una taza de interes muy baja. Ademas te regalamos un seguro de casa durante los primeros 3 años.",
    }
  ]
  constructor(
    private menuService: MenuService,
  ) {
  }

  ngOnInit(): void {
    this.menuService.setDatosMenu(1)
    sessionStorage.clear()
  }
}
