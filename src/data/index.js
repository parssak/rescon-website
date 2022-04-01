import { getRoutes, getNavigation } from "@/data/utils";

export const SITE_PATH = "rescon-website";

const MASTER_ROUTES = [
  {
    path: "/",
    label: "home",
    component: () => import("@/views/home"),
    hidden: false,
  },
  {
    path: "/about",
    label: "about",
    component: () => import("@/views/about/overview"),
    hidden: false,
  },
  {
    path: "/about/overview",
    label: "overview",
    component: () => import("@/views/about/overview"),
    hidden: false,
  },
  {
    path: "/about/team-members",
    label: "team members",
    component: () => import("@/views/about/team-members"),
    hidden: false,
  },
  {
    path: "/about/boards",
    label: "about/boards",
    component: () => import("@/views/about/boards"),
    hidden: false,
  },
  {
    path: "/about/committees/anti-racism-roundtable/overview",
    label: "committees/anti-racism-roundtable/overview",
    component: () => import("@/views/about/committees/anti-racism-roundtable/overview"),
    hidden: false,
  },
  {
    path: "/about/committees/anti-racism-roundtable/bipoc-initiative",
    label: "committees/anti-racism-roundtable/bipoc-initiative",
    component: () => import("@/views/about/committees/anti-racism-roundtable/bipoc-initiative"),
    hidden: false,
  },
  {
    path: "/about/committees/anti-racism-roundtable/roundtable-members",
    label: "committees/anti-racism-roundtable/roundtable-members",
    component: () => import("@/views/about/committees/anti-racism-roundtable/roundtable-members"),
    hidden: false,
  },
  {
    path: "/about/committees/anti-racism-roundtable/roundtable-timeline",
    label: "committees/anti-racism-roundtable/roundtable-timeline",
    component: () => import("@/views/about/committees/anti-racism-roundtable/roundtable-timeline"),
    hidden: false,
  },
  {
    path: "/about/committees/anti-racism-roundtable/roundtable-resources",
    label: "committees/anti-racism-roundtable/roundtable-resources",
    component: () => import("@/views/about/committees/anti-racism-roundtable/roundtable-resources"),
    hidden: false,
  },
  {
    path: "/about/committees/anti-racism-roundtable/roundtable-newsroom",
    label: "committees/anti-racism-roundtable/roundtable-newsroom",
    component: () => import("@/views/about/committees/anti-racism-roundtable/roundtable-newsroom"),
    hidden: false,
  },
  {
    path: "/about/our-partners/jrca",
    label: "about/our-partners/jrca",
    component: () => import("@/views/about/our-partners/jrca"),
    hidden: false,
  },
  {
    path: "/about/our-partners/mtaba",
    label: "about/our-partners/mtaba",
    component: () => import("@/views/about/our-partners/mtaba"),
    hidden: false,
  },
  {
    path: "/about/our-partners/trclb",
    label: "about/our-partners/trclb",
    component: () => import("@/views/about/our-partners/trclb"),
    hidden: false,
  },
  {
    path: "/about/our-partners/drclb",
    label: "about/our-partners/drclb",
    component: () => import("@/views/about/our-partners/drclb"),
    hidden: false,
  },
  {
    path: "/about/our-affiliates/training-and-safety",
    label: "about/our-affiliates/training-and-safety",
    component: () => import("@/views/about/our-affiliates/training-and-safety"),
    hidden: false,
  },
  {
    path: "/about/our-affiliates/health-and-safety",
    label: "about/our-affiliates/health-and-safety",
    component: () => import("@/views/about/our-affiliates/health-and-safety"),
    hidden: false,
  },
  {
    path: "/about/our-affiliates/industry",
    label: "about/our-affiliates/industry",
    component: () => import("@/views/about/our-affiliates/industry"),
    hidden: false,
  },
  {
    path: "/media/in-the-news",
    label: "media/in-the-news",
    component: () => import("@/views/media/in-the-news"),
    hidden: false,
  },
  {
    path: "/media/press-releases",
    label: "media/press-releases",
    component: () => import("@/views/media/press-releases"),
    hidden: false,
  },
  {
    path: "/media/blog",
    label: "media/blog",
    component: () => import("@/views/media/blog"),
    hidden: false,
  },
  {
    path: "/media/videos",
    label: "media/videos",
    component: () => import("@/views/media/videos"),
    hidden: false,
  },
  {
    path: "/media/newsletters",
    label: "media/newsletters",
    component: () => import("@/views/media/newsletters"),
    hidden: false,
  },
  {
    path: "/submissions",
    label: "submissions",
    component: () => import("@/views/submissions"),
    hidden: false,
  },
  {
    path: "/events/upcoming-events",
    label: "events/upcoming-events",
    component: () => import("@/views/events/upcoming-events"),
    hidden: false,
  },
  {
    path: "/events/past-events",
    label: "events/past-events",
    component: () => import("@/views/events/past-events"),
    hidden: false,
  },
  {
    path: "/orcca",
    label: "orcca",
    component: () => import("@/views/orcca"),
    hidden: false,
  },
  {
    path: "/collective-agreements",
    label: "collective-agreements",
    component: () => import("@/views/collective-agreements"),
    hidden: false,
  },
  {
    path: "/contact",
    label: "contact",
    component: () => import("@/views/contact"),
    hidden: false,
  },
];

export const routes = getRoutes(MASTER_ROUTES);

export const navigation = getNavigation(MASTER_ROUTES);
