import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Somos los mejores en el cuidado de tu moto y de tu bolsillo <b><a  target="_blank">Tel:3212896934</a></b> 
      <br>O puedes acercarte a nuestro punto fijo en cll 4 # 11-46 B/JOSE MARIA OBANDO
    </span>
    <div class="socials">
      <a href="#" target="_blank" class="ion ion-social-facebook"></a>
    </div>
  `,
})
export class FooterComponent {
}
