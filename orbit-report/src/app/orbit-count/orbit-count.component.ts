
import { Component, OnInit, Input } from '@angular/core';

import { Satellite } from '../satellite';


@Component({

    selector: 'app-orbit-count',
    templateUrl: './orbit-count.component.html',
    styleUrls: ['./orbit-count.component.css']

})

export class OrbitCountComponent implements OnInit {

    @Input() types: { "type": string, "count": number }[];
    @Input() satellites: Satellite[];

constructor() { } 


ngOnInit() {
  }

}
