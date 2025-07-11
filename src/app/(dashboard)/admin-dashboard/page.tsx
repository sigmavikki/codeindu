"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// Dummy Data for Charts
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const clientGrowthData = [5, 8, 6, 12, 15, 10, 7, 14, 18, 20, 22, 25];
// const projectData = [2, 3, 5, 4, 6, 7, 8, 5, 6, 9, 10, 12];
const revenueData = [
  12000, 18000, 15000, 20000, 25000, 28000, 30000, 35000, 38000, 40000, 45000,
  50000,
];
const empPieData = [20, 15, 10, 8, 5];
const empPieLabels = ["Frontend", "Backend", "DevOps", "Design", "QA"];

// Helper to create chart data
function generateChartData(title: string, data: number[], bg: string) {
  return {
    labels: months,
    datasets: [
      {
        label: title,
        data,
        backgroundColor: bg,
        borderColor: bg,
        tension: 0.3,
      },
    ],
  };
}

export default function DashboardPage() {
  return (
    <div className="space-y-8 p-6">
      {/* Header */}
      <header>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-500">
          Comprehensive view of business operations
        </p>
      </header>

      {/* --- METRICS --- */}
      <Section title="User Metrics">
        <MetricGrid
          items={[
            { title: "Total Users", value: "3,450" },
            { title: "Business Users", value: "1,800" },
            { title: "Student Users", value: "1,650" },
            { title: "Monthly Active Users", value: "2,900" },
            { title: "New Signups", value: "350" },
          ]}
        />
      </Section>

      <Section title="Course & Training Data">
        <MetricGrid
          items={[
            { title: "Total Courses", value: "175" },
            { title: "Purchased Courses", value: "1,230" },
            { title: "Unpurchased Courses", value: "475" },
            { title: "Active Learners", value: "980" },
            { title: "Monthly Enrollments", value: "120" },
          ]}
        />
      </Section>

      <Section title="Client & Projects">
        <MetricGrid
          items={[
            { title: "Total Clients", value: "620" },
            { title: "Ongoing Projects", value: "55" },
            { title: "Completed Projects", value: "575" },
            { title: "Pending Projects", value: "45" },
            { title: "Avg. Project Duration", value: "45 days" },
          ]}
        />
      </Section>

      <Section title="Finance & HR">
        <MetricGrid
          items={[
            { title: "Client Payments Received", value: "$320,000" },
            { title: "Client Payments Pending", value: "$18,500" },
            { title: "Total Employees", value: "72" },
            { title: "Employee Payment Pending", value: "$9,750" },
            { title: "Monthly Revenue", value: "$80,000" },
            { title: "Total Revenue", value: "$690,000" },
            { title: "IT Investment", value: "$150,000" },
          ]}
        />
      </Section>

      <Section title="IT Infrastructure">
        <MetricGrid
          items={[
            { title: "Active Servers", value: "15" },
            { title: "Idle Servers", value: "4" },
            { title: "Cloud Projects", value: "130" },
            { title: "API Calls Daily", value: "150k" },
            { title: "Average Uptime", value: "99.9%" },
          ]}
        />
      </Section>

      {/* --- CHARTS --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ChartCard title="Client Growth">
          <Bar
            data={generateChartData("New Clients", clientGrowthData, "#6366F1")}
          />
        </ChartCard>
        <ChartCard title="Revenue Over Time">
          <Line
            data={generateChartData("Revenue ($)", revenueData, "#16A34A")}
          />
        </ChartCard>
        <ChartCard title="Employee Role Distribution">
          <Pie
            data={{
              labels: empPieLabels,
              datasets: [
                {
                  label: "Employees",
                  data: empPieData,
                  backgroundColor: [
                    "#FBBF24",
                    "#3B82F6",
                    "#10B981",
                    "#F87171",
                    "#8B5CF6",
                  ],
                },
              ],
            }}
          />
        </ChartCard>
      </div>
    </div>
  );
}

// --- Helper Components --- //
function MetricGrid({ items }: { items: { title: string; value: string }[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {items.map((stat, idx) => (
        <div
          key={idx}
          className="bg-white text-black p-4 rounded shadow text-center"
        >
          <h3 className="text-sm text-gray-600">{stat.title}</h3>
          <p className="text-xl font-bold">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      {children}
    </section>
  );
}

function ChartCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white p-6 rounded shadow text-black">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );
}
