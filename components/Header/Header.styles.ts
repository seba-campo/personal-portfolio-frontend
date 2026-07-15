import { cn } from "@/lib/utils"

export const styles = {
    header: "border-b border-border sticky top-0 bg-background/80 backdrop-blur-md z-50",
    container: "max-w-6xl mx-auto px-6",
    row: "flex items-center justify-between h-16",
    logo: {
        button: "group flex items-center gap-3 cursor-pointer",
        mark: "flex h-8 w-8 items-center justify-center border border-foreground bg-foreground text-background font-mono text-sm font-bold",
        textWrap: "hidden sm:flex flex-col items-start leading-none",
        name: "font-mono text-sm font-semibold tracking-tight",
        role: "font-mono text-[10px] text-muted-foreground tracking-widest uppercase",
    },
    actionsWrap: "flex items-center gap-6",
    nav: {
        wrap: "hidden md:flex items-center gap-1",
        link: (isActive: boolean) => cn(
            "group cursor-pointer px-3 py-2 font-mono text-xs uppercase tracking-widest transition-colors",
            isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
        ),
        linkIndex: "text-primary",
    },
    divider: "hidden md:block h-5 w-px bg-border",
    social: {
        wrap: "flex items-center gap-1",
        link: "flex h-9 w-9 items-center justify-center border border-transparent text-muted-foreground hover:text-foreground hover:border-border transition-colors",
        icon: "w-4 h-4",
    },
}
