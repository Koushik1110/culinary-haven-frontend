"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { User } from "@/types";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  email: z.string().optional(),
  name: z.string().min(3, "Name is required"),
  addressLine1: z.string().min(3, "AddressLine1 is required"),
  country: z.string().min(3, "Country is required"),
  city: z.string().min(3, "City is required"),
});

export type UserFormDataType = z.infer<typeof formSchema>;

interface Props {
  currentUser: User;
  isLoading: boolean;
  onSave: (userProfileData: UserFormDataType) => void;
  noMargin?: boolean;
  title?: string;
  buttonText?: string;
}

const UserProfileForm = ({
  currentUser,
  isLoading,
  onSave,
  buttonText = "Submit",
  noMargin,
  title = "Update your profile",
}: Props) => {
  const form = useForm<UserFormDataType>({
    resolver: zodResolver(formSchema),
    defaultValues: currentUser,
  });

  useEffect(() => {
    form.reset(currentUser);
  }, [form, currentUser]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className={cn(
          "container mx-auto space-y-5",
          noMargin ? "mt-0" : "mt-20"
        )}
      >
        <div>
          <h2 className="font-bold text-2xl">{title}</h2>
          <FormDescription>View and update your information</FormDescription>
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} disabled />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="addressLine1"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Address Line 1</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button className="bg-orange-500" size="lg" disabled={isLoading}>
          {isLoading ? (
            <span className="flex items-center gap-2">
              <Loader2 size={18} className="animate-spin" />
              Processing
            </span>
          ) : (
            <span>{buttonText}</span>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default UserProfileForm;
