import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.scss'],
})
export class MenuLeftComponent implements OnInit {
  ngOnInit(): void {}

  log(span: EventTarget | null) {
    const btns = document.getElementsByClassName(
      'btn'
    ) as HTMLCollectionOf<HTMLSpanElement>;

    for (let i = 0; i < btns.length; i++) {
      btns[i].style.backgroundColor = '';
    }

    if (span instanceof HTMLSpanElement) {
      span.style.backgroundColor = '#2b2e44';
    }
  }
}
