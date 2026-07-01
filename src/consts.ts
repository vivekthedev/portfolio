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
  DESCRIPTION: "Backend developer building AI systems, distributed pipelines, and serverless applications.",
};

export const SKILLS = [
  { category: "Languages", items: "Python, JavaScript, C++, SQL, Bash" },
  { category: "AI & LLM", items: "LangGraph, LangChain, RAG Pipelines, OpenAI APIs, Vector Databases, Prompt Engineering" },
  { category: "Backend Frameworks", items: "Django, FastAPI, Django REST Framework (DRF), REST APIs, WebSockets" },
  { category: "Architecture & Messaging", items: "Distributed Systems, Event-Driven Architecture, Microservices, RabbitMQ, Celery, Redis" },
  { category: "Cloud & DevOps", items: "AWS (Lambda, API Gateway, EventBridge, DynamoDB, S3, ECS, EC2, IAM), Docker, Linux, GitHub Actions" },
  { category: "Databases", items: "PostgreSQL, MySQL, MongoDB" },
];

export const EDUCATION = [
  {
    school: "Babasaheb Bhimrao Ambedkar University",
    degree: "Master of Computer Applications (MCA) — Computer Science",
    focus: "Advanced Algorithms, Cloud Computing, Artificial Intelligence",
    period: "Jul 2024 — Jun 2026",
  },
  {
    school: "University of Lucknow",
    degree: "Bachelor of Computer Applications (BCA) — Computer Science & IT",
    focus: "",
    period: "Sep 2020 — Aug 2023",
  },
];

export const ACHIEVEMENTS = [
  "Published articles for DigitalOcean and Earthly, amassing 10,000+ total reads on Kubernetes Autoscaling, Docker, and Python Unicode.",
  "Honorable Mention in the Microsoft Pygame Hackathon for innovative game logic and design.",
  "Solved 150+ Data Structures and Algorithms problems on LeetCode.",
];

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
