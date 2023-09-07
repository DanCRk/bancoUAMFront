export interface Menu {
  menus: Array<Menus>;
}

export interface Menus {
  titulo: string;
  url: string;
  submenus?: Array<Submenu>;
}

export interface Submenu {
  titulo: string;
  url: string;
  subsubmenus?: Array<Subsubmenu>;
}

export interface Subsubmenu {
  titulo: string;
  url: string;
}
