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
      <TabsList>
        <TabsTrigger value="manage">Manage Medicines</TabsTrigger>
        <TabsTrigger value="add">Add Medicine</TabsTrigger>
      </TabsList>

      <TabsContent value="manage" className="mt-6">
        {manageContent}
      </TabsContent>

      <TabsContent value="add" className="mt-6 flex justify-center">
        {addContent}
      </TabsContent>
    </Tabs>
  );
}
