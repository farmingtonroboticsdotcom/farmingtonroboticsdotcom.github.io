import Timeline from "@pages/about/HistoryNew/Timeline.tsx";

export default function HistoryNew() {
    return (
        <>
            <Timeline years={[2026, 2025, 2024]} currentYear={2025} currentProgress={0}/>
        </>
    );
}
