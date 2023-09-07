export interface Menu {
  menues: Array<Menues>;
}

export interface Menues {
  titulo: string;
  url: string;
  submenu?: Array<Submenu>;
}

export interface Submenu {
  titulo: string;
  url: string;
  subsubmenu?: Array<Subsubmenu>;
}

export interface Subsubmenu {
    titulo: string;
    url: string;
  }
