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
    hidden: false,
    fake: true,
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
    path: "/about/team-members/:team_id",
    label: "team member",
    component: () => import("@/views/about/team-members/:team_id"),
    hidden: false,
  },
  {
    path: "/about/boards",
    label: "boards",
    component: () => import("@/views/about/boards"),
    hidden: false,
  },
  {
    path: "/about/committees",
    label: "Commitees",
    component: () => import("@/views/about/committees"),
    hidden: false,
  },
  {
    path: "/about/committees/anti-racism-roundtable",
    label: "Anti Racism Roundtable",
    hidden: false,
    fake: true,
  },
  {
    path: "/about/committees/anti-racism-roundtable/overview",
    label: "Overview",
    component: () => import("@/views/about/committees/anti-racism-roundtable/overview"),
    hidden: false,
  },
  {
    path: "/about/committees/anti-racism-roundtable/bipoc-initiative",
    label: "BIPOC Initiative",
    component: () => import("@/views/about/committees/anti-racism-roundtable/bipoc-initiative"),
    hidden: false,
  },
  {
    path: "/about/committees/anti-racism-roundtable/roundtable-members",
    label: "Roundtable Members",
    component: () => import("@/views/about/committees/anti-racism-roundtable/roundtable-members"),
    hidden: false,
  },
  {
    path: "/about/committees/anti-racism-roundtable/roundtable-timeline",
    label: "Roundtable Timeline",
    component: () => import("@/views/about/committees/anti-racism-roundtable/roundtable-timeline"),
    hidden: false,
  },
  {
    path: "/about/committees/anti-racism-roundtable/roundtable-resources",
    label: "Roundtable Resources",
    component: () => import("@/views/about/committees/anti-racism-roundtable/roundtable-resources"),
    hidden: false,
  },
  {
    path: "/about/committees/anti-racism-roundtable/roundtable-newsroom",
    label: "Roundtable Newsroom",
    component: () => import("@/views/about/committees/anti-racism-roundtable/roundtable-newsroom"),
    hidden: false,
  },
  {
    path: "/about/committees/building-innovation",
    label: "Building Innovation",
    component: () => import("@/views/about/committees/building-innovation"),
    hidden: false,
  },
  {
    path: "/about/committees/health-and-safety",
    label: "Health & Safety",
    component: () => import("@/views/about/committees/health-and-safety"),
    hidden: false,
  },
  {
    path: "/about/committees/technical-council",
    label: "Technical Council",
    component: () => import("@/views/about/committees/technical-council"),
    hidden: false,
  },
  {
    path: "/about/committees/training-and-education",
    label: "Training & Education",
    component: () => import("@/views/about/committees/training-and-education"),
  },
  // END TODO
  {
    path: "/about/our-partners",
    label: "Our Partners",
    hidden: false,
    fake: true,
  },
  {
    path: "/about/our-partners/jrca",
    label: "JRCA",
    component: () => import("@/views/about/our-partners/jrca"),
    hidden: false,
  },
  {
    path: "/about/our-partners/mtaba",
    label: "MTABA",
    component: () => import("@/views/about/our-partners/mtaba"),
    hidden: false,
  },
  {
    path: "/about/our-partners/trclb",
    label: "TRCLB",
    component: () => import("@/views/about/our-partners/trclb"),
    hidden: false,
  },
  {
    path: "/about/our-partners/drclb",
    label: "DRCLB",
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
    path: "/media",
    label: "media",
    fake: true,
  },
  {
    path: "/media/in-the-news",
    label: "in the news",
    component: () => import("@/views/media/in-the-news"),
    hidden: false,
  },
  {
    path: "/media/press-releases",
    label: "press releases",
    component: () => import("@/views/media/press-releases"),
    hidden: false,
  },
  {
    path: "/media/blog",
    label: "blog",
    component: () => import("@/views/media/blog"),
    hidden: false,
  },
  {
    path: "/media/videos",
    label: "videos",
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
  // events
  {
    path: "/events",
    label: "events",
    fake: true,
  },
  {
    path: "/events/upcoming-events",
    label: "upcoming events",
    component: () => import("@/views/events/upcoming-events"),
    hidden: false,
  },
  {
    path: "/events/past-events",
    label: "past events",
    component: () => import("@/views/events/past-events"),
    hidden: false,
  },
  {
    path: "/orcca",
    label: "ORCCA",
    component: () => import("@/views/orcca"),
    hidden: false,
  },
  {
    path: "/collective-agreements",
    label: "Collective Agreements",
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

export const people = [
  {
    name: "Richard Lyall",
    id: "richard-lyall",
    title: "President",
    socials: {
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Andrew Pariser",
    id: "andrew-pariser",
    title: "Vice-President",
    socials: {
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Grant Cameron",
    id: "grant-cameron",
    title: "Senior Director of Public Affairs",
    socials: {
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Paul De Berardis",
    id: "paul-de-berardis",
    title: "Director of Building Science and Innovation",
    socials: {
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Amina Dibe",
    id: "amina-dibe",
    title: "Manager of Government and Stakeholder Relations",
    socials: {
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Michael De Lint",
    id: "michael-de-lint",
    title: "Director of Building Regulatory Reform and Technical Standards",
    socials: {
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Ellen Cleverdon",
    id: "ellen-cleverdon",
    title: "Office Manager",
    socials: {
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Rose Cleverdon",
    id: "rose-cleverdon",
    title: "Office Administrator",
    socials: {
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Ahd Alashry",
    id: "ahd-alashry",
    title: "Policy and Programs Analyst",
    socials: {
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Nancy hizaka-vilardo",
    id: "nancy-hizaka-vilardo",
    title: "Director of Operations for Member Services",
    socials: {
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
];
