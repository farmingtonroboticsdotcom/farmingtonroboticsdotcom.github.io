import ContentContainer from "@components/features/ContentContainer";

export default function TeamCalendar() {
    return (
        <ContentContainer theme="grey">
            <h3>Team Calendar</h3>
            <p>Consider adding this calendar to your account to receive live updates for meetings and events.</p>
            <iframe
                className="calendar-main"
                title="calendar"
                src="https://calendar.google.com/calendar/embed?src=8606120d12dbfe86c751999d07f98f01316f43ccb235041e653e14b19df5e482%40group.calendar.google.com&ctz=America%2FNew_York"
            />
        </ContentContainer>
    );
}