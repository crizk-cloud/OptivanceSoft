"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { productHref, products, themeStyle } from "@/lib/products";
import { mainNav } from "@/lib/site";

const linkClass =
  "rounded-md px-3 py-2 text-sm font-medium text-muted-dark transition-colors duration-150 hover:text-white aria-[current=page]:text-white";

function ProductsMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="relative"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className={cn(linkClass, "inline-flex items-center gap-1", open && "text-white")}
      >
        Products
        <ChevronDown
          className={cn("size-4 transition-transform duration-150", open && "rotate-180")}
          aria-hidden
        />
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="absolute top-full left-1/2 mt-3 w-[34rem] -translate-x-1/2 rounded-2xl border border-line bg-white p-3 shadow-raised"
      >
        <ul className="grid grid-cols-2 gap-1">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <li key={p.slug}>
                <Link
                  href={productHref(p.slug)}
                  onClick={() => setOpen(false)}
                  className="flex gap-3 rounded-xl p-3 transition-colors hover:bg-surface"
                >
                  <span
                    style={themeStyle(p)}
                    className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-(--accent-soft) text-(--accent-strong) ring-1 ring-(--accent-muted)"
                  >
                    <Icon className="size-4" aria-hidden strokeWidth={1.75} />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">{p.name}</span>
                    <span className="mt-0.5 block text-xs leading-snug text-muted">{p.category}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mt-2 border-t border-line px-3 pt-3 pb-1">
          <Link
            href="/#products"
            onClick={() => setOpen(false)}
            className="text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            View all products
          </Link>
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const current = (href: string) => (href === pathname ? ("page" as const) : undefined);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    // Close the mobile menu if the viewport grows to the desktop layout.
    const desktop = window.matchMedia("(min-width: 64rem)");
    const onResize = () => desktop.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);
  const [home, ...rest] = mainNav;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" aria-label="OptivanceSoft home" onClick={close} className="rounded-lg">
          <Logo inverse priority />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            <li>
              <Link href={home.href} aria-current={current(home.href)} className={linkClass}>
                {home.label}
              </Link>
            </li>
            <li>
              <ProductsMenu />
            </li>
            {rest.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={current(item.href)} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/contact">Get in Touch</ButtonLink>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="-mr-2 inline-flex size-11 items-center justify-center rounded-lg text-white hover:bg-white/10 lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
        </button>
      </Container>

      <div
        id={menuId}
        hidden={!open}
        className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-navy-950 lg:hidden"
      >
        <Container className="py-4">
          <nav aria-label="Mobile">
            <ul className="flex flex-col">
              <li>
                <Link href={home.href} onClick={close} className="block rounded-md px-2 py-3 font-medium text-white hover:bg-white/5">
                  {home.label}
                </Link>
              </li>
              <li className="py-2">
                <p className="px-2 pb-1 text-xs font-semibold tracking-wide text-muted-dark uppercase">
                  Products
                </p>
                <ul>
                  {products.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={productHref(p.slug)}
                        onClick={close}
                        className="block rounded-md px-2 py-2.5 text-white hover:bg-white/5"
                      >
                        {p.name}
                        <span className="block text-sm text-muted-dark">{p.category}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              {rest.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={close}
                    className="block rounded-md px-2 py-3 font-medium text-white hover:bg-white/5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ButtonLink href="/contact" size="lg" className="mt-4 w-full" onClick={close}>
            Get in Touch
          </ButtonLink>
        </Container>
      </div>
    </header>
  );
}
