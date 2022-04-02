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
    // console.debug(baseRoute);
    const indexBaseRoute = navItems.findIndex((item) => item.path === `/${baseRoute}`);

    if (indexBaseRoute === -1) {
      navItems.push({
        path: `/${baseRoute}`,
        label: route.label,
        dropdownItems: [],
      });
    } else if (!route.path.includes(":")) {
      // get number of / in route.path
      const numberOfSlashes = route.path.split("/").length - 1;

      if (numberOfSlashes === 2) {
        navItems[indexBaseRoute].dropdownItems.push({
          path: route.path,
          label: route.label,
          dropdownItems: [],
        });
      } else if (numberOfSlashes === 3) {
        console.debug(route.path, numberOfSlashes, navItems[indexBaseRoute], indexBaseRoute);
        console.debug(navItems[indexBaseRoute]);
        // take substring of route.path before the last /
        const parentPath = route.path.substring(0, route.path.lastIndexOf("/"));
        const parentIndex = navItems[indexBaseRoute].dropdownItems.findIndex(
          (item) => item.path === parentPath
        );
        if (parentIndex === -1) {
          console.debug("ERROR: parentIndex === -1", route.path, parentPath);
        } else {
          navItems[indexBaseRoute].dropdownItems[parentIndex].dropdownItems.push({
            path: route.path,
            label: route.label,
            dropdownItems: [],
          });
        }

        // navItems[indexBaseRoute].dropdownItems[parentIndex].dropdownItems.push({
        //   path: route.path,
        //   label: route.label,
        //   dropdownItems: [],
        // });
        // navItems[indexBaseRoute].dropdownItems[0].dropdownItems.push({
        //   path: route.path,
        //   label: route.label,
        // });
      }
      // if (numberOfSlashes === 2) {
      //   if (!navItems[indexBaseRoute]) {
      //     // navItems[indexBaseRoute] = {
      //       //   path: `/${baseRoute}`,
      //       //   label: route.label,
      //     //   dropdownItems: [],
      //     // };
      //   }
      //   console.debug("ERROR: navItems[indexBaseRoute] is undefined");
      //   navItems[indexBaseRoute].dropdownItems.push({
      //     path: route.path,
      //     label: route.label,
      //   });
      // } else {
      //   console.debug(route.path, numberOfSlashes, navItems[indexBaseRoute], indexBaseRoute);
      //   // take substring before last /
      //   const substr = route.path.substring(0, route.path.lastIndexOf("/"));
      //   console.debug(substr, substr.length === route.path.length - 1);
      // }
    }
  }

  return navItems;
};

export const getMedia = (file) => `${SITE_PATH}/media/${file}`;
