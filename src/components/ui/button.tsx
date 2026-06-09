import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "group/button relative isolate inline-flex shrink-0 items-center justify-center overflow-hidden border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-[color,border-color,box-shadow,transform,background-color] outline-none select-none before:pointer-events-none before:absolute before:inset-0 before:z-0 before:origin-left before:scale-x-0 before:bg-[var(--button-fill)] before:transition-transform before:duration-300 before:ease-out hover:before:scale-x-100 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&>*]:relative [&>*]:z-10 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-primary-foreground hover:bg-primary/80",
                outline:
                    "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
                ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
                destructive:
                    "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
                link: "text-primary underline-offset-4 hover:underline",
                // fill buttons
                fillDefault: [
                    "bg-primary text-primary-foreground",
                    "[--button-fill:var(--primary-foreground)]",
                    "hover:text-primary",
                    "dark:hover:text-primary",
                ].join(" "),
                fillOutline: [
                    "border-border bg-background text-foreground",
                    "[--button-fill:var(--foreground)]",
                    "hover:text-background",
                    "dark:hover:text-background",
                    "aria-expanded:bg-muted aria-expanded:text-foreground",
                    "dark:border-input dark:bg-input/30",
                ].join(" "),
                fillSecondary: [
                    "bg-secondary text-secondary-foreground",
                    "[--button-fill:var(--secondary-foreground)]",
                    "hover:text-secondary",
                    "dark:hover:text-secondary",
                    "aria-expanded:bg-secondary",
                ].join(" "),
                fillGhost: [
                    "bg-transparent text-foreground",
                    "[--button-fill:var(--foreground)]",
                    "hover:text-background",
                    "dark:hover:text-background",
                    "aria-expanded:bg-muted aria-expanded:text-foreground",
                ].join(" "),
            },
            size: {
                default:
                    "h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
                xs: "h-6 gap-1 rounded-[min(var(--radius-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
                sm: "h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
                lg: "h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
                icon: "size-9",
                "icon-xs":
                    "size-6 rounded-[min(var(--radius-md),8px)] in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3",
                "icon-sm":
                    "size-8 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md",
                "icon-lg": "size-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

function Button({
    className,
    variant = "default",
    size = "default",
    asChild = false,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? Slot.Root : "button";

    return (
        <Comp
            data-slot="button"
            data-variant={variant}
            data-size={size}
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    );
}

export { Button, buttonVariants };
