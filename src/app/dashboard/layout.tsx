// import Sidebar from "@/components/Dashboard/Sidebar";
// import React from "react";

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="min-h-screen flex bg-gray-50">
//       <Sidebar />
//       <div className="flex-1 p-6">
//         <header className="border-b pb-4 mb-4">
//           <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
//         </header>
//         {children}
//       </div>
//     </div>
//   );
// }

// app/dashboard/layout.tsx
import Sidebar from "@/components/Dashboard/Sidebar";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* <Header /> */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}
