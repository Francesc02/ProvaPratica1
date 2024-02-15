import { MenuItem } from "primeng/api/menuitem";

export const ItemMocked: MenuItem[] = [{
    label: 'Home',
    icon: 'pi pi-home',
    routerLink: 'home'
},
{
    label: 'Film',
    items: [
      { label: 'Azione' },
      { label: 'Thriller' },
      { label: 'Romantico' },
      { label: 'Avventura' },
      { label: 'Horror' },
      { label: 'Fantascienza'}
    ]
}];