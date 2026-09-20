// Types


export interface Project {
  title: string;
  service: string;
  area: string;
  image?: string | any;
}

export interface ProjectsProps {
  projects?: Project[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  service: string;
  category: string;
  area: string;
  image: any;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
  clientOverview: {
    carModel: string;
    issueReported: string;
    responseTimeMinutes: number;
    completionTimeHours: string;
  };
  problemAnalysis: string;
  diagnosticSteps: string[];
  solutionDetails: string;
  partsReplaced: string[];
  resultsSummary: string;
  faqs: { question: string; answer: string }[];
}
