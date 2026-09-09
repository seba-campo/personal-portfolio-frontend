import { cn } from "@/lib/utils"

const input =
    "w-full px-4 py-3 bg-secondary/40 border border-border rounded-none focus:outline-none focus:ring-0 focus:border-primary text-foreground placeholder:text-muted-foreground font-mono text-sm transition-colors"

const label =
    "block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2"

export const styles = {
    section: "px-6 py-20 min-h-[70vh]",
    container: "max-w-6xl mx-auto",
    label: {
        wrap: "flex items-center gap-4 mb-10",
        index: "font-mono text-xs text-primary tracking-widest",
        title: "font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground",
        line: "h-px flex-1 bg-border",
    },
    grid: "grid lg:grid-cols-12 gap-12",
    info: {
        col: "lg:col-span-5",
        heading: "font-sans font-bold tracking-tighter text-[clamp(2.5rem,8vw,5rem)] leading-[0.9] mb-6 text-balance",
        headingDot: "text-primary",
        description: "text-muted-foreground leading-relaxed mb-10 max-w-md",
        list: "border-t border-border",
        linkedinLink: "group flex items-center justify-between py-5 border-b border-border hover:text-primary transition-colors",
        itemTitle: "font-mono text-sm font-medium uppercase tracking-wider",
        itemSubtitle: "font-mono text-xs text-muted-foreground mt-1",
        arrowIcon: "w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform",
        responseRow: "flex items-center justify-between py-5 border-b border-border",
        responseDot: "flex h-2 w-2 bg-primary animate-pulse",
    },
    form: {
        col: "lg:col-span-7",
        form: "space-y-6 border border-border p-6 md:p-8 bg-card",
        row: "grid md:grid-cols-2 gap-6",
        label,
        input,
        select: cn(input, "appearance-none"),
        selectWrap: "relative",
        selectIcon: "absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5 pointer-events-none",
        textarea: cn(input, "resize-none"),
        footerRow: "flex items-center justify-between flex-wrap gap-4",
        requiredNote: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
        actions: "flex gap-3",
        cancelButton: "rounded-none border-border text-foreground hover:bg-secondary bg-transparent font-mono text-xs uppercase tracking-widest cursor-pointer",
        submitButton: "rounded-none bg-primary text-primary-foreground hover:bg-foreground hover:text-background font-mono text-xs uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
        submitIcon: "w-4 h-4 mr-2",
        loadingWrap: "flex items-center",
        spinner: "animate-spin -ml-1 mr-3 h-4 w-4",
        spinnerTrack: "opacity-25",
        spinnerHead: "opacity-75",
        successMessage: "p-4 border border-primary/30 bg-primary/10 text-primary font-mono text-xs text-center",
        errorMessage: "p-4 border border-destructive/30 bg-destructive/10 text-destructive font-mono text-xs text-center",
    },
}
