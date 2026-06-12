export function Footer() {
    return (
        <footer className="border-t border-border relative z-10">
            <div className="max-w-6xl mx-auto px-6 py-10">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center border border-foreground bg-foreground text-background font-mono text-sm font-bold">
                            SC
                        </span>
                        <span className="font-mono text-xs text-muted-foreground">
                            &copy; 2025 Sebastián Campo
                        </span>
                    </div>
                    <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        <span>Olivos, BA — AR</span>
                        <span className="text-primary">/</span>
                        <span>Built with Next.js</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
