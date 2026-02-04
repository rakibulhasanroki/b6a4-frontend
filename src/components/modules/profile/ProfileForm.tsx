"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { updateProfileAction } from "@/actions/user.action";
import { User } from "@/types";

export default function ProfileForm({ user }: { user: User }) {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(user.name || "");
  const [phoneNumber, setPhone] = useState(user.phoneNumber || "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await updateProfileAction({ name, phoneNumber });

      if (!res.success) {
        toast.error(res.message || "Update failed");
        return;
      }

      toast.success("Profile updated successfully");
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-card border rounded-xl p-6 shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label>Email</Label>
          <Input value={user.email} disabled />
        </div>

        <div className="space-y-2">
          <Label>Full Name</Label>
          <Input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div className="space-y-2">
          <Label>Phone Number</Label>
          <Input
            name="phone"
            value={phoneNumber}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
          />
        </div>

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Updating..." : "Update Profile"}
        </Button>
      </form>
    </div>
  );
}
