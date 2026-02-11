// components/modules/seller/MedicineTabs.tsx
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MedicineTabs({
  manageContent,
  addContent,
}: {
  manageContent: React.ReactNode;
  addContent: React.ReactNode;
}) {
  return (
    <Tabs defaultValue="manage" className="w-full">
      {/* Tabs Header */}
      <div className="flex justify-center md:justify-start">
        <TabsList
          className="
            bg-muted
            p-1
            rounded-lg
            gap-1
          "
        >
          <TabsTrigger
            value="manage"
            className="
              rounded-md
              px-4
              py-2
              text-sm
              data-[state=active]:bg-background
              data-[state=active]:text-foreground
              data-[state=active]:shadow-sm
            "
          >
            Manage Medicines
          </TabsTrigger>

          <TabsTrigger
            value="add"
            className="
              rounded-md
              px-4
              py-2
              text-sm
              data-[state=active]:bg-background
              data-[state=active]:text-foreground
              data-[state=active]:shadow-sm
            "
          >
            Add Medicine
          </TabsTrigger>
        </TabsList>
      </div>

      {/* Manage Medicines */}
      <TabsContent value="manage" className="mt-6">
        {manageContent}
      </TabsContent>

      {/* Add Medicine */}
      <TabsContent value="add" className="mt-6 flex justify-center">
        <div className="w-full max-w-xl">{addContent}</div>
      </TabsContent>
    </Tabs>
  );
}
