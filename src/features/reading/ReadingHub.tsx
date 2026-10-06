import { Link } from "@tanstack/react-router";
import { BookOpen, Clock3, Search, SlidersHorizontal, Trophy } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { readingTests, type QuestionKind } from "@/data/readingTests";
import { loadAttempts, type SavedAttempt } from "./storage";
import { SiteHeader } from "./SiteHeader";

const categories=["All","REAL EXAM","CAMBRIDGE","PRACTICE"] as const;
const parts=["All parts","Part 1","Part 2","Part 3"] as const;
export function ReadingHub(){
 const [category,setCategory]=useState<(typeof categories)[number]>("All");
 const [part,setPart]=useState<(typeof parts)[number]>("All parts");
 const [type,setType]=useState<"all"|QuestionKind>("all");
 const [difficulty,setDifficulty]=useState("All Levels");
 const [search,setSearch]=useState("");
 const [attempts,setAttempts]=useState<SavedAttempt[]>([]);
 useEffect(()=>setAttempts(loadAttempts()),[]);
 const visible=useMemo(()=>readingTests.filter(test=>(category==="All"||test.category===category)&&(part==="All parts"||test.part===Number(part.slice(-1)))&&(type==="all"||test.questions.some(q=>q.type===type))&&(difficulty==="All Levels"||test.difficulty===difficulty)&&(`${test.title} ${test.topic}`.toLowerCase().includes(search.toLowerCase()))),[category,part,type,difficulty,search]);
 return <div className="min-h-screen bg-background"><SiteHeader/><main>
  <section className="border-b bg-hero"><div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16"><div className="max-w-2xl"><span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase text-brand"><BookOpen className="size-4"/>IELTS Academic Reading</span><h1 className="text-3xl font-bold tracking-tight sm:text-5xl">Reading Question Sets</h1><p className="mt-4 text-base text-muted-foreground sm:text-lg">Take real exam–style mocks. Test with official IELTS rhythm.</p></div></div></section>
  <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
   <div className="border-b pb-5"><div className="flex flex-wrap gap-2">{categories.map(item=><Button key={item} size="sm" variant={category===item?"default":"outline"} onClick={()=>setCategory(item)}>{item}</Button>)}</div>
    <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"><div className="flex gap-1 overflow-x-auto rounded-md bg-muted p-1">{parts.map(item=><Button key={item} size="sm" variant={part===item?"secondary":"ghost"} className={part===item?"bg-background shadow-sm":""} onClick={()=>setPart(item)}>{item}</Button>)}</div><div className="flex flex-col gap-2 sm:flex-row"><label className="relative min-w-56"><Search className="absolute left-3 top-2.5 size-4 text-muted-foreground"/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search test or topic" className="h-9 w-full rounded-md border bg-background pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring"/></label><label className="relative"><SlidersHorizontal className="absolute left-3 top-2.5 size-4 text-muted-foreground"/><select value={type} onChange={e=>setType(e.target.value as "all"|QuestionKind)} className="h-9 rounded-md border bg-background pl-9 pr-8 text-sm"><option value="all">All Types</option><option value="tfng">True / False / Not Given</option><option value="mcq">Multiple Choice</option><option value="matching">Matching Headings</option><option value="gap">Summary Completion</option></select></label><select value={difficulty} onChange={e=>setDifficulty(e.target.value)} className="h-9 rounded-md border bg-background px-3 text-sm"><option>All Levels</option><option>Easy</option><option>Medium</option><option>Hard</option></select></div></div>
   </div>
   <div className="mt-6 flex items-center justify-between"><h2 className="text-sm font-semibold">{visible.length} question sets</h2><span className="text-xs text-muted-foreground">Updated weekly</span></div>
   <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{visible.map(test=>{const best=attempts.filter(a=>a.testId===test.id).sort((a,b)=>b.band-a.band)[0];return <article key={test.id} className="group flex min-h-64 flex-col rounded-lg border bg-card p-5 shadow-card transition hover:-translate-y-0.5 hover:border-brand/50 hover:shadow-card-hover"><div className="flex items-center justify-between"><span className="rounded-sm bg-brand-soft px-2 py-1 text-[10px] font-bold tracking-wide text-brand">{test.category}</span><span className="rounded-sm bg-muted px-2 py-1 text-[10px] font-semibold text-muted-foreground">PART {test.part}</span></div><h3 className="mt-5 text-xl font-bold leading-snug">{test.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{test.topic}</p><div className="mt-auto flex flex-wrap items-center gap-4 pt-6 text-xs text-muted-foreground"><span className="flex items-center gap-1.5"><BookOpen className="size-3.5"/>{test.questions.length} questions</span><span className="flex items-center gap-1.5"><Clock3 className="size-3.5"/>{test.duration} min</span>{best&&<span className="flex items-center gap-1.5 font-semibold text-success"><Trophy className="size-3.5"/>Best {best.band.toFixed(1)}</span>}</div><Button asChild className="mt-5 w-full"><Link to="/reading/test/$testId" params={{testId:test.id}}>Start test</Link></Button></article>})}</div>
   {!visible.length&&<div className="py-20 text-center"><Search className="mx-auto size-8 text-muted-foreground"/><h3 className="mt-4 font-semibold">No question sets found</h3><p className="mt-1 text-sm text-muted-foreground">Try adjusting your filters or search.</p></div>}
  </section>
 </main></div>
}
