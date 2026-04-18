import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const partnerInquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  title: z.string().min(1, "Title is required"),
  institution: z.string().min(1, "Institution is required"),
  institutionType: z.enum([
    "sovereign-fund",
    "institutional-investor",
    "family-office",
    "dfi",
    "corporate-partner",
    "jv-operator",
    "other",
  ]),
  country: z.string().min(1, "Country is required"),
  sectors: z.array(z.string()).min(1, "Select at least one sector"),
  nature: z.enum([
    "investment",
    "joint-venture",
    "acquisition",
    "strategic-partnership",
    "other",
  ]),
  dealSize: z.enum(["<1m", "1-10m", "10-50m", "50m+", "not-applicable"]),
  message: z.string().min(20, "Please provide more detail"),
});

export const newsletterSchema = z.object({
  email: z.string().email("Valid email is required"),
});

export const talentPipelineSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  currentRole: z.string().optional(),
  areaOfInterest: z.string().min(1, "Select an area of interest"),
  linkedin: z.string().url().optional().or(z.literal("")),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type PartnerInquiryData = z.infer<typeof partnerInquirySchema>;
export type NewsletterData = z.infer<typeof newsletterSchema>;
export type TalentPipelineData = z.infer<typeof talentPipelineSchema>;
