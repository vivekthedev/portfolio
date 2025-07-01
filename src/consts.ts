import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "vivekthedev",
  EMAIL: "contactvivekhere@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "my personal blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const GUEST_POSTS: Metadata = {
  TITLE: "Guest Posts",
  DESCRIPTION: "A collection of articles I have written for other blogs.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const GUEST_POSTS_DATA = [
  {
      "title": "How to Use lxml for Web Scraping",
      "href": "https://brightdata.com/blog/web-data/lxml-web-scraping"
  },
  {
      "title": "Using Docker Init in Python",
      "href": "https://earthly.dev/blog/docker-init-in-python/"
  },
  {
      "title": "Python Web Scraping with Beautiful Soup and Selenium",
      "href": "https://earthly.dev/blog/python-web-scraping/"
  },
  {
      "title": "How to build API integrations in Python",
      "href": "https://www.merge.dev/blog/api-integration-python"
  },
  {
      "title": "Automating Infrastructure with Terraform Functions: Best Practices and Examples",
      "href": "https://earthly.dev/blog/terraform-functions/"
  },
  {
      "title": "Web Crawling with Python",
      "href": "https://brightdata.com/blog/how-tos/web-crawling-with-python"
  },
  {
      "title": "Kubernetes Monitoring Guide Using Liveness Probe",
      "href": "https://birdeatsbug.com/blog/kubernetes-monitoring-guide-using-liveness-probe"
  },
  {
      "title": "Step-by-step guide to use GraphQL with Django",
      "href": "https://birdeatsbug.com/blog/step-by-step-guide-to-use-graphql-with-django"
  },
  {
      "title": "How to Work with Unicode in Python",
      "href": "https://www.digitalocean.com/community/tutorials/how-to-work-with-unicode-in-python"
  },
  {
      "title": "A Developer's Guide to Kubernetes Services",
      "href": "https://earthly.dev/blog/kubernetes-services/"
  }
];

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/vivekthedev/",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/vivekthedev/"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/vivekthedev/",
  }
];
