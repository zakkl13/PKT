import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'carousel',
    templateUrl: 'carousel.component.html',
    styleUrls: ['carousel.component.css']
})
export class CarouselComponent implements OnInit {
    @Input() images: string[];
    idxs: number[] = [];

    ngOnInit() {
            for (var i = 0; i < this.images.length; i++) {
                this.idxs.push(i);
            }
    }
}
