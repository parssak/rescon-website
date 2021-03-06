import { SITE_PATH } from "@/data";

export const getRoutes = (routes) => {
  return routes
    .map((route) => ({
      path: route.path,
      component: route.component,
    }))
    .filter((route) => !route?.fake); // fake routes are for just buttons
};

export const getNavigation = (routes) => {
  const navItems = [];
  for (const route of routes) {
    if (route.hidden) continue;
    const baseRoute = route.path.split("/")[1];
    const indexBaseRoute = navItems.findIndex((item) => item.path === `/${baseRoute}`);

    if (indexBaseRoute === -1) {
      navItems.push({
        path: `/${baseRoute}`,
        label: route.label,
        dropdownItems: [],
        fake: route.fake,
      });
    } else if (!route.path.includes(":")) {
      // get number of / in route.path
      const numberOfSlashes = route.path.split("/").length - 1;

      if (numberOfSlashes === 2) {
        navItems[indexBaseRoute].dropdownItems.push({
          path: route.path,
          label: route.label,
          dropdownItems: [],
          fake: route.fake,
        });
      } else if (numberOfSlashes === 3) {
        // take substring of route.path before the last /
        const parentPath = route.path.substring(0, route.path.lastIndexOf("/"));
        const parentIndex = navItems[indexBaseRoute].dropdownItems.findIndex(
          (item) => item.path === parentPath
        );
        if (parentIndex === -1) {
          console.error("ERROR: parentIndex === -1", route.path, parentPath);
        } else {
          navItems[indexBaseRoute].dropdownItems[parentIndex].dropdownItems.push({
            path: route.path,
            label: route.label,
            dropdownItems: [],
            fake: route.fake,
          });
        }
      } else if (numberOfSlashes === 4) {
        // take substring of route.path before the second last /
        const parentPath = route.path.substring(0, route.path.lastIndexOf("/"));
        const grandparentPath = parentPath.substring(0, parentPath.lastIndexOf("/"));
        const grandparentIndex = navItems[indexBaseRoute].dropdownItems.findIndex(
          (item) => item.path === grandparentPath
        );
        const parentIndex = navItems[indexBaseRoute].dropdownItems[
          grandparentIndex
        ].dropdownItems.findIndex((item) => item.path === parentPath);

        if (parentIndex === -1) {
          console.error("ERROR: parentIndex === -1", route.path, parentPath);
        } else {
          navItems[indexBaseRoute].dropdownItems[grandparentIndex].dropdownItems[
            parentIndex
          ].dropdownItems.push({
            path: route.path,
            label: route.label,
            dropdownItems: [],
            fake: route.fake,
          });
        }
      }
    }
  }

  return navItems;
};

export const getMedia = (file) => `${SITE_PATH}/media/${file}`;
