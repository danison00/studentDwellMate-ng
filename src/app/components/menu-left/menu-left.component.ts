import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.scss'],
})
export class MenuLeftComponent implements OnInit {
  private expandMenu = false;

  ngOnInit(): void {
    const btns = document.getElementsByClassName(
      'btn'
    ) as HTMLCollectionOf<HTMLButtonElement>;

    for (let i = 0; i < btns.length; i++) btns[i].style.backgroundColor = '';
  }

  clickBtnMenu(element: EventTarget | null) {
    if (this.expandMenu) this.onExpandMenu();

    const btns = document.getElementsByClassName(
      'btn'
    ) as HTMLCollectionOf<HTMLButtonElement>;

    for (let i = 0; i < btns.length; i++) btns[i].style.backgroundColor = '';

    if (element instanceof HTMLButtonElement)
      element.style.backgroundColor = '#2b2e44';

    if (element instanceof HTMLImageElement) {
      const node = element.parentNode as HTMLElement;
      if (node) node.style.backgroundColor = '#2b2e44';
    }
    if (element instanceof HTMLSpanElement) {
      const node = element.parentNode as HTMLElement;
      if (node) node.style.backgroundColor = '#2b2e44';
    }
  }
  async onExpandMenu() {
    const menu = document.getElementById('menu') as HTMLElement;
    const btns = document.getElementsByClassName('btn') as HTMLCollection;

    if (!this.expandMenu) {
      menu.classList.add('menu-expanded');

      for (let i = 0; i < btns.length; i++) {
        const btn = btns.item(i) as HTMLElement;
        btn.classList.add('expanded');
        const span = btn.lastChild as HTMLElement;
        span.classList.add('expanded');
      }
    } else {
      for (let i = 0; i < btns.length; i++) {
        const btn = btns.item(i) as HTMLElement;
        btn.classList.remove('expanded');
        const span = btn.lastChild as HTMLElement;
        span.classList.remove('expanded');
      }
      menu.classList.remove('menu-expanded');
    }

    this.expandMenu = !this.expandMenu;
    this.rotateArrow();
  }
  async rotateArrow() {
    const arrow = document.getElementById('arrow') as HTMLElement;

    if (this.expandMenu) arrow.classList.add('arrow-rotate');
    else arrow.classList.remove('arrow-rotate');
  }
}
