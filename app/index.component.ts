import { Component} from '@angular/core';
import { CarouselComponent } from './carousel.component';

@Component({
    selector: 'index',
    templateUrl: 'index.component.html',
    styleUrls: ['index.component.css'],
    directives: [CarouselComponent]
})
export class IndexComponent {
    title: string = "Index";
    subtitle: string = "Epsilon Chi Chapter at Virginia Tech";
    index_images: string[] = ["includes/images/no_box.png", "includes/images/clouds.jpg", "includes/images/torg-sunset.jpg"];
}
