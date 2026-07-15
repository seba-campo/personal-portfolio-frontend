import { cn } from "@/lib/utils"

export const styles = {
    section: "px-6 py-20 min-h-[70vh]",
    container: "max-w-6xl mx-auto",
    label: {
        wrap: "flex items-center gap-4 mb-10",
        index: "font-mono text-xs text-primary tracking-widest",
        title: "font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground",
        line: "h-px flex-1 bg-border",
    },
    heading: "font-sans font-bold tracking-tighter text-[clamp(2.5rem,9vw,7rem)] leading-[0.9] mb-4 text-balance",
    headingDot: "text-primary",
    description: "text-muted-foreground max-w-xl mb-16 leading-relaxed",
    list: "border-t border-border",
    item: "group grid md:grid-cols-12 gap-4 md:gap-8 items-start py-7 border-b border-border hover:bg-secondary/40 transition-colors px-2 -mx-2",
    index: "md:col-span-1 font-mono text-xs text-primary pt-1",
    titleCol: "md:col-span-4",
    titleRow: "flex items-center gap-3",
    title: "font-sans text-xl md:text-2xl font-bold tracking-tight group-hover:text-primary transition-colors",
    status: (isCompleted: boolean) => cn(
        "inline-block mt-2 font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 border",
        isCompleted ? "border-border text-muted-foreground" : "border-primary/40 text-primary"
    ),
    descriptionCol: "md:col-span-5",
    itemDescription: "text-sm text-muted-foreground leading-relaxed mb-3",
    techWrap: "flex flex-wrap gap-1.5",
    tech: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground border border-border px-2 py-0.5",
    arrowCol: "md:col-span-2 flex md:justify-end items-start",
    arrowIcon: "w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform",
}
