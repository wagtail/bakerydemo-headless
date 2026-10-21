import { cache } from 'react';
import api from './api';

// Cache the menu items fetch
export const getMenuItems = cache(async () => {
  const homePage = await api.getPage('/');
  const response = await api.getPages({
    child_of: homePage.id,
    filters: { show_in_menus: 'true' },
  });
  return response.items;
});
