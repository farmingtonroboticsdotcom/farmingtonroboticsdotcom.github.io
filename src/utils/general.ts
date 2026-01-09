export function clamp(n: number, min: number, max: number): number {
    return Math.min(max, Math.max(min, n));
}

export function mobileScreen(): boolean {
    return window.innerWidth <= 1000 || window.innerHeight <= 600;
}

export function formatDocumentTitle(title: string): string {
    return title.trim() === ""
        ? "Enforcers Team 178"
        : title + " - Enforcers Team 178";
}
