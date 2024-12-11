import { isInPeriod } from "@/lib/utils";
import { Badge } from "@/components/ui/badge"
import { useTranslations } from "next-intl";

type Props = {
    dateFrom: string;
    dateTo: string;
}
export const Recruitment = ({ dateFrom, dateTo }: Props) => {
    const { status } = isInPeriod(dateFrom, dateTo);
    const t = useTranslations("Recruitment");

    return (
        <div className="absolute right-2 top-2">
            <Badge variant={
                status == 'noData1' && 'secondary' ||
                status == 'noData2' && 'secondary' ||
                status == 'Started' && 'success' ||
                status == 'Ended' && 'destructive' ||
                status == 'Coming' && 'warning' ||
                'default'
            }>{t(`${status}`)}</Badge>
        </div>
    )
}

