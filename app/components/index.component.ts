import { Component} from '@angular/core';
import { CarouselComponent } from './carousel.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'index',
    templateUrl: './components/index.component.html',
    styleUrls: ['./components/index.component.css'],
    directives: [CarouselComponent, ROUTER_DIRECTIVES]
})
export class IndexComponent {
    title: string = "Index";
    subtitle: string = "Epsilon Chi Chapter at Virginia Tech";
    index_images: string[] = ["includes/images/no_box.png", "includes/images/clouds.jpg", "includes/images/torg-sunset.jpg"];
}
