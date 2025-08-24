import { getEmailByHashId } from "@/actions/subscription";
import UnsubscribeForm from "@/components/unsubscribe/unsubscribe-form";
import { redirect } from "next/navigation";

export default async function UnsubscribePage({ searchParams }) {
    const { hashId } = await searchParams;

    const emailData = hashId ? await getEmailByHashId(hashId) : null;
    let emailFormInfo =
        emailData && (emailData.status !== "error" ? emailData?.Item?.form_info : null);

    if (typeof emailData?.Item?.form_info === "string") {
        emailFormInfo = JSON.parse(emailData?.Item?.form_info);
    }
    const email = emailFormInfo?.comm_info?.email;

    if (!email) redirect("/");

    return <UnsubscribeForm email={email} />;
}
