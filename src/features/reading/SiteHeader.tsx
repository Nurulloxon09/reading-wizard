import { Link } from "@tanstack/react-router";
import { Moon, Sun, Target } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function SiteHeader(){
 const [dark,setDark]=useState(false);
 useEffect(()=>{setDark(document.documentElement.classList.contains("dark"))},[]);
 const toggle=()=>{const next=!dark;setDark(next);document.documentElement.classList.toggle("dark",next);localStorage.setItem("ieltstation-theme",next?"dark":"light")};
 return <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur"><div className="mx-auto flex h-16 max-w-7xl items-center gap-5 px-4 sm:px-6">
  <Link to="/reading" className="flex min-w-fit items-center gap-2"><span className="text-lg font-bold tracking-tight">IELT<span className="text-brand">Station</span></span><span className="hidden rounded-sm bg-brand-soft px-2 py-1 text-[10px] font-semibold uppercase text-brand sm:inline">Reading Edition</span></Link>
  <nav className="ml-auto hidden items-center gap-7 md:flex"><Link to="/reading" activeProps={{className:"text-foreground"}} className="text-sm font-medium text-muted-foreground">Reading Tests</Link><Link to="/history/reading_test" activeProps={{className:"text-foreground"}} className="text-sm font-medium text-muted-foreground">My Attempts</Link></nav>
  <div className="ml-auto flex items-center gap-2 md:ml-5"><div className="hidden items-center gap-2 rounded-full border bg-card px-3 py-1.5 text-xs font-semibold sm:flex"><Target className="size-3.5 text-brand"/>Target band: 7.5</div><Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme">{dark?<Sun/>:<Moon/>}</Button></div>
 </div></header>
}
