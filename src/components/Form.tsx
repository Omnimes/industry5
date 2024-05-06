"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"
import { sendEmail } from "@/lib/send-email"
import { useTranslations } from "next-intl"
import { LuAlertCircle, LuCheckCircle } from "react-icons/lu";
import { useState } from "react"
import { LoadingSpinner } from "./ui/loader"

const accountFormSchema = z.object({
    name: z
        .string()
        .min(2, {
            message: "Name must be at least 2 characters.",
        })
        .max(30, {
            message: "Name must not be longer than 30 characters.",
        }),
    email: z.string().email(),
    message: z
        .string()
        .min(2, {
            message: "Name must be at least 2 characters.",
        })
        .max(1000, {
            message: "Name must not be longer than 1000 characters.",
        }),
})

type AccountFormValues = z.infer<typeof accountFormSchema>
const defaultValues: Partial<AccountFormValues> = {
    name: "",
    email: "",
    message: ""
}

export function ContactForm() {
    const t = useTranslations('Form');
    const [responseForm, setResponseForm] = useState("");
    const [loading, setLoading] = useState(false);
    const form = useForm<AccountFormValues>({
        resolver: zodResolver(accountFormSchema),
        defaultValues,
    })

    async function onSubmit(data: AccountFormValues) {
        setLoading(true)
        const response = await sendEmail(data);
        setResponseForm(response?.message);
        form.reset({ message: "", name: "", email: "" });
        setLoading(false);
        setTimeout(() => {
            setResponseForm("")
        }, 10000);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t("name")}</FormLabel>
                            <FormControl>
                                <Input placeholder={t("name")} {...field} />
                            </FormControl>
                            <FormDescription>
                                {t("descName")}
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t("email")}</FormLabel>
                            <FormControl>
                                <Input placeholder={t("email")} {...field} />
                            </FormControl>
                            <FormDescription>
                                {t("descEmail")}
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t("message")}</FormLabel>
                            <FormControl>
                                <Textarea placeholder={t("message")} {...field} />
                            </FormControl>
                            <FormDescription>
                                {t("descMessage")}
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={loading}>
                    {loading && <LoadingSpinner size={16} className="mr-1" />}
                    {t("submit")}
                </Button>
                {responseForm == 'sent' && <Alert variant="success">
                    <LuCheckCircle className="size-4" />
                    <AlertTitle>{t("SuccessForm")}</AlertTitle>
                    <AlertDescription>
                        {t("SuccessFormMessage")}
                    </AlertDescription>
                </Alert>}

                {responseForm == 'error' && <Alert variant="destructive">
                    <LuAlertCircle className="size-4" />
                    <AlertTitle>{t("ErrorForm")}</AlertTitle>
                    <AlertDescription>
                        {t("ErrorFormMessage")}
                    </AlertDescription>
                </Alert>}
            </form>
        </Form>
    )
}
