import type { AggregatedTask, AggregatedTaskKey, BoardTask, TaskItem } from "./types";
import Banner1 from "../assets/banner1.jpg";
import Banner2 from "../assets/banner2.jpg";
import Banner3 from "../assets/banner3.jpg";
import Banner4 from "../assets/banner4.jpg";

const kanbanBoardMock: BoardTask = {
  backlog: [
    {
      category: "design",
      backgroundImage: Banner1,
      title: "UI Inspiration Board",
      description: "Collect visual inspiration from competitors.",
      issueDate: "2025-07-15",
      members: ["Leo"],
    },
    {
      category: "research",
      backgroundImage: Banner2,
      title: "Market Trends Report",
      description: "Gather current UX trends in the fintech sector.",
      issueDate: "2025-07-17",
      members: ["Grace", "Ben"],
    },
    {
      category: "content",
      backgroundImage: Banner3,
      title: "Q4 Content Strategy",
      description: "Initial draft for Q4 content roadmap.",
      issueDate: "2025-07-18",
      members: ["Jaya"],
    },
  ],

  todo: [
    {
      category: "design",
      backgroundImage: Banner2,
      title: "Typography System",
      description: "Define font sizes, weights, and styles.",
      issueDate: "2025-07-20",
      members: ["Nora", "Oscar"],
    },
    {
      category: "research",
      backgroundImage: Banner4,
      title: "Heatmap Study",
      description: "Evaluate user attention zones on the homepage.",
      issueDate: "2025-07-21",
      members: ["Zane"],
    },
    {
      category: "content",
      backgroundImage: Banner3,
      title: "Welcome Email Flow",
      description: "Create email copy for new user onboarding.",
      issueDate: "2025-07-23",
      members: ["Maya", "Emma"],
    },
  ],

  progress: [
    {
      category: "design",
      backgroundImage: Banner2,
      title: "Dashboard Wireframes",
      description: "Sketch wireframes for the analytics dashboard.",
      issueDate: "2025-07-28",
      members: ["Alice", "Nina"],
    },
    {
      category: "design",
      backgroundImage: Banner4,
      title: "Brand Style Guide",
      description: "Create consistent visual style guide.",
      issueDate: "2025-07-25",
      members: ["Leo", "Sam"],
    },
    {
      category: "research",
      backgroundImage: Banner3,
      title: "Persona Interviews",
      description: "Interview 10 target users for insights.",
      issueDate: "2025-07-26",
      members: ["Charlie"],
    },
    {
      category: "research",
      backgroundImage: Banner4,
      title: "Session Recordings Review",
      description: "Watch 20 Hotjar session recordings.",
      issueDate: "2025-07-27",
      members: ["Ella", "Tom"],
    },
    {
      category: "content",
      backgroundImage: Banner2,
      title: "SEO Blog Series",
      description: "Draft 3-part SEO blog on product discovery.",
      issueDate: "2025-07-29",
      members: ["Maya", "Arjun"],
    },
    {
      category: "content",
      backgroundImage: Banner3,
      title: "Feature Documentation",
      description: "Write docs for the new filtering feature.",
      issueDate: "2025-07-30",
      members: ["Nora"],
    },
  ],

  complete: [
    {
      category: "design",
      backgroundImage: Banner4,
      title: "Mobile App Mockups",
      description: "Final mockups for v2 mobile app.",
      issueDate: "2025-07-10",
      members: ["Zane", "Alice"],
    },
    {
      category: "design",
      backgroundImage: Banner3,
      title: "Custom Illustrations",
      description: "Create 6 homepage illustrations.",
      issueDate: "2025-07-15",
      members: ["Grace"],
    },
    {
      category: "research",
      backgroundImage: Banner4,
      title: "Customer Satisfaction Survey",
      description: "Analyze 2025 Q2 survey results.",
      issueDate: "2025-07-05",
      members: ["Oscar"],
    },
    {
      category: "research",
      backgroundImage: Banner3,
      title: "Churn Rate Analysis",
      description: "Identify reasons behind user churn.",
      issueDate: "2025-07-08",
      members: ["Tom", "Ben"],
    },
    {
      category: "content",
      backgroundImage: Banner4,
      title: "Product Launch Newsletter",
      description: "Write & schedule launch announcement.",
      issueDate: "2025-07-01",
      members: ["Emma", "Jaya"],
    },
    {
      category: "content",
      backgroundImage: Banner4,
      title: "Tutorial Video Scripts",
      description: "Draft scripts for 5 how-to videos.",
      issueDate: "2025-07-03",
      members: ["Arjun", "Maya"],
    },
  ],

  review: [
    {
      category: "design",
      backgroundImage: Banner3,
      title: "UI Inspiration Board",
      description: "Collect visual inspiration from competitors.",
      issueDate: "2025-07-15",
      members: ["Leo"],
    },
    {
      category: "research",
      backgroundImage: Banner4,
      title: "Market Trends Report",
      description: "Gather current UX trends in the fintech sector.",
      issueDate: "2025-07-17",
      members: ["Grace", "Ben"],
    },
    {
      category: "content",
      backgroundImage: Banner3,
      title: "Q4 Content Strategy",
      description: "Initial draft for Q4 content roadmap.",
      issueDate: "2025-07-18",
      members: ["Jaya"],
    },
  ],
};

export const aggregatedTask: Record<AggregatedTaskKey, AggregatedTask> = {
  completedTask: {
    count: 80,
    lastWeek: 10,
    lastMonths: [1, 2, 3, 5, 8, 10],
  },

  newTask: {
    count: 10,
    lastWeek: 10,
    lastMonths: [1, 2, 3, 5, 8, 10],
  },

  done: {
    count: 14,
    lastWeek: 5,
    lastMonths: [1, 2, 3, 5, 8, 10],
  },
};

export const mockTasks: TaskItem[] = [
  {
    id: 1,
    startTime: "9.00 am",
    title: "Search Inspiration for project",
    link: "https://www.uistore.com",
    comments: 8,
    completion: 24,
  },
  {
    id: 2,
    startTime: "11.00 am",
    title: "Design wireframe for login",
    link: "https://www.figma.com",
    comments: 5,
    completion: 60,
  },
];

export const monthlyTaskReport = [
  { name: "Jane", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "March", uv: 2000, pv: 9800, amt: 2290 },
  { name: "April", uv: 2780, pv: 3908, amt: 2000 },
  { name: "May", uv: 1890, pv: 4800, amt: 2181 },
  { name: "June", uv: 2390, pv: 3800, amt: 2500 },
  { name: "July", uv: 3490, pv: 4300, amt: 2100 },
];



export default kanbanBoardMock;
