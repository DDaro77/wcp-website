import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as Phone, c as ChevronDown, i as Play, l as Check, n as X, o as Menu, s as Instagram, t as Youtube } from "../_libs/lucide-react.mjs";
import { i as string, r as object } from "../_libs/zod.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1, u as Slot } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DpRdjSNc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[color,background-color,border-color,opacity,transform,box-shadow] duration-150 ease-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			outline: "border border-border-strong bg-transparent text-fg hover:bg-fg/5",
			ghost: "text-fg hover:bg-fg/5"
		},
		size: {
			default: "h-11 rounded-md px-5 text-sm",
			sm: "h-9 rounded-md px-3 text-xs",
			lg: "h-12 rounded-md px-6 text-sm",
			cta: "h-12 rounded-md px-6 text-xs font-semibold uppercase tracking-label"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var SITE = {
	name: "West Coast Production",
	short: "WCP",
	tagline: "The most cinematic capture on the Atlantic edge",
	manifesto: "West Coast Production closes the gap between the Ireland you can walk and the Ireland only the sky can see — a west that still belongs to weather, stone, and light.",
	motto: "Capture. Create. Inspire.",
	location: "Lisdoonvarna, County Clare · Ireland",
	coords: "53.2707° N, 9.0568° W",
	phoneDisplay: "086 055 3070",
	phoneTel: "+353860553070",
	instagram: "https://www.instagram.com/west_coast_production/",
	youtube: "https://www.youtube.com/@west.coast.production",
	facebook: "https://www.facebook.com/westcoastproduction/",
	instagramHandle: "@west_coast_production"
};
var NAV = [
	{
		href: "#craft",
		label: "Craft"
	},
	{
		href: "#work",
		label: "Work"
	},
	{
		href: "#scale",
		label: "Scale"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
var SCALE = [
	{
		n: "01",
		title: "Still",
		body: "8K frames from the air. Campaigns, print, the image that holds when the weather will not."
	},
	{
		n: "02",
		title: "Motion",
		body: "Cinematic aerial and FPV. The west coast as a moving picture — cliff, spray, and line."
	},
	{
		n: "03",
		title: "Immersion",
		body: "360° worlds you can stand inside. Places no tripod, no crane, no walk can reach."
	}
];
var LIGHT_PILLARS = [
	"Maximize the last light on the Wild Atlantic Way",
	"Produce 8K stills and cinematic reels at scale",
	"Unlock places only a drone can reach"
];
var ACHIEVEMENTS = [
	"Licensed by the Irish Aviation Authority",
	"Fully insured commercial operations",
	"Hotels and tourism films along the west",
	"Property and estate aerials for campaigns",
	"FPV through stone, spray, and sky",
	"360° capture for places you cannot walk",
	"8K stills for print and global campaigns",
	"Historical and narrative film support",
	"Reels cut for the platforms that matter",
	"Based on the Atlantic edge, Ireland"
];
var STATS = [
	{
		value: "8K",
		label: "Stills we deliver from the air"
	},
	{
		value: "360°",
		label: "Worlds you can stand inside"
	},
	{
		value: "2,500 km",
		label: "Wild Atlantic Way we fly"
	}
];
var SERVICES = [
	{
		id: "aerial",
		name: "Aerial",
		kicker: "Cinematic camera drones",
		line: "Powering tourism & campaigns",
		body: "Stabilized aerial cinematography for hotels, tourism boards, and brands that need the west coast at its true scale.",
		image: "/cliffs.jpg",
		alt: "Cliffs of Moher at golden hour, Atlantic swell against dark limestone"
	},
	{
		id: "fpv",
		name: "FPV",
		kicker: "High-speed narrative",
		line: "Powering story at speed",
		body: "First-person flight along the rock face. The shot that walks the cliff instead of looking at it.",
		image: "/fpv.jpg",
		alt: "FPV view racing along an Irish limestone cliff with ocean far below"
	},
	{
		id: "360",
		name: "360°",
		kicker: "Worlds, not frames",
		line: "Powering place",
		body: "Immersive capture for destinations and estates. A complete horizon, not a single angle.",
		image: "/atlantic.jpg",
		alt: "High-altitude aerial of the Wild Atlantic Way coastline"
	},
	{
		id: "stills",
		name: "8K Stills",
		kicker: "Print-grade frames",
		line: "Powering campaigns",
		body: "High-resolution stills from the air for property, hospitality, and the image that has to hold a billboard.",
		image: "/burren.jpg",
		alt: "Aerial of the Burren limestone pavement meeting the Atlantic"
	},
	{
		id: "reels",
		name: "Reels",
		kicker: "Cut for the screen",
		line: "Powering the feed",
		body: "Short-form cut from the same flights. One operation, every ratio the platforms ask for.",
		image: "/drone.jpg",
		alt: "Cinema camera drone in flight over the Atlantic at golden hour"
	}
];
var WORK = [
	{
		src: "/hero.jpg",
		title: "Atlantic Edge",
		meta: "Aerial · County Clare",
		alt: "Camera drone over the Cliffs of Moher at sunset"
	},
	{
		src: "/fpv.jpg",
		title: "The Line",
		meta: "FPV · West Coast",
		alt: "FPV flight along a sheer Irish cliff"
	},
	{
		src: "/property.jpg",
		title: "Heritage Stay",
		meta: "Hotels · Tourism",
		alt: "Aerial of a coastal Irish castle hotel at dusk"
	},
	{
		src: "/operator.jpg",
		title: "On Station",
		meta: "Production · Ireland",
		alt: "Drone operator on an Irish cliff edge at blue hour"
	},
	{
		src: "/storm.jpg",
		title: "Force of Weather",
		meta: "Aerial · Atlantic",
		alt: "Storm waves exploding against Irish west-coast cliffs"
	},
	{
		src: "/burren.jpg",
		title: "The Burren",
		meta: "8K Still · Clare",
		alt: "Karst limestone of the Burren meeting the ocean"
	}
];
var PROJECT_TYPES = [
	"Hotel & Tourism",
	"Property",
	"Commercial",
	"Documentary",
	"FPV",
	"360°",
	"Reels"
];
var GROUND_VS_AIR = {
	ground: {
		title: "From the ground",
		items: [
			"Heights you cannot stand",
			"Roads that stop at the gate",
			"Weather windows lost to access",
			"A frame that never finds the coast"
		]
	},
	air: {
		title: "From the air",
		items: [
			"A licensed aircraft",
			"The whole Atlantic edge",
			"Light as it actually is",
			"A west that finally holds still"
		]
	}
};
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-200", scrolled || open ? "border-b border-border bg-bg/92" : "border-b border-transparent bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-3 min-h-11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/wcp-badge.png",
						alt: "",
						className: "size-10 rounded-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-semibold tracking-label uppercase text-fg",
						children: SITE.short
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-8 md:flex",
					"aria-label": "Primary",
					children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "text-xs font-medium uppercase tracking-label text-muted transition-colors duration-150 hover:text-fg",
						children: item.label
					}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "default",
						size: "cta",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							children: "Book a shoot"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "relative flex size-11 items-center justify-center rounded-md text-fg md:hidden",
					"aria-label": open ? "Close menu" : "Open menu",
					"aria-expanded": open,
					onClick: () => setOpen((v) => !v),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: cn("size-5 transition-[opacity,transform,filter] duration-200", open ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: cn("absolute size-5 transition-[opacity,transform,filter] duration-200", open ? "scale-100 opacity-100" : "scale-[0.25] opacity-0 blur-[4px]") })]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "mobile-nav",
			hidden: !open,
			className: "border-t border-border bg-bg md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col gap-1 px-5 py-6",
				"aria-label": "Mobile",
				children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					onClick: () => setOpen(false),
					className: "flex min-h-12 items-center text-2xl font-medium text-fg",
					children: item.label
				}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "cta",
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						onClick: () => setOpen(false),
						children: "Book a shoot"
					})
				})]
			})
		})]
	});
}
function ScrollProgress() {
	const [p, setP] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const h = document.documentElement;
			const max = h.scrollHeight - h.clientHeight;
			setP(max > 0 ? h.scrollTop / max : 0);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full origin-left bg-steel transition-transform duration-75 ease-out",
			style: { transform: `scaleX(${p})` }
		})
	});
}
var Dialog = Dialog$1;
var DialogTitle = DialogTitle$1;
var DialogDescription = DialogDescription$1;
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		className: cn("fixed inset-0 z-50 bg-bg/85 data-[state=open]:opacity-100 data-[state=closed]:opacity-0 transition-opacity duration-200", className),
		...props
	});
}
function DialogContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		className: cn("dialog-panel fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2", "rounded-xl bg-bg-elevated p-3 shadow-[var(--shadow-border)]", "focus:outline-none", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
			className: "absolute right-3 top-3 z-10 flex size-11 items-center justify-center rounded-md text-fg/80 hover:bg-fg/10 hover:text-fg",
			"aria-label": "Close",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
		})]
	})] });
}
function Hero() {
	const [reelOpen, setReelOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative isolate flex h-svh flex-col justify-end overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				className: "absolute inset-0 size-full object-cover",
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true,
				poster: "/hero.jpg",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
					src: "/hero.mp4",
					type: "video/mp4"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/25" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-bg/40 via-transparent to-bg/30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start px-5 pb-24 pt-24 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/wcp-badge.png",
						alt: "West Coast Production",
						className: "mb-6 size-16 rounded-full object-cover sm:size-20"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-xs uppercase tracking-cinema text-steel",
						children: ["Ireland · ", SITE.coords]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "metal mt-3 text-hero font-semibold uppercase",
						children: "WCP"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-lg font-medium uppercase tracking-cinema text-fg sm:text-xl",
						children: "West Coast Production"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-lg text-fg/90 sm:text-xl",
						children: SITE.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "cta",
							onClick: () => setReelOpen(true),
							className: "min-h-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-3.5 ml-0.5" }), "Watch reel"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "cta",
							className: "min-h-12",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								children: "Book a shoot"
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#manifesto",
				className: "absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-muted transition-colors hover:text-fg",
				"aria-label": "Scroll to manifesto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-5 animate-bounce" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: reelOpen,
				onOpenChange: setReelOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "overflow-hidden p-2 sm:p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "sr-only",
							children: "West Coast Production reel"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
							className: "sr-only",
							children: "Aerial cinematography reel along the Irish west coast."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
							className: "aspect-video w-full rounded-lg object-cover img-frame",
							controls: true,
							autoPlay: true,
							playsInline: true,
							poster: "/hero.jpg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
								src: "/hero.mp4",
								type: "video/mp4"
							})
						})
					]
				})
			})
		]
	});
}
function Reveal({ children, className, delay = 0 }) {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setShown(true);
			return;
		}
		const io = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setShown(true);
				io.disconnect();
			}
		}, {
			threshold: .12,
			rootMargin: "0px 0px -8% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		style: { transitionDelay: shown ? `${delay}ms` : "0ms" },
		className: cn("reveal transition-[opacity,transform,filter] duration-700 ease-out-quart", shown ? "opacity-100 translate-y-0 blur-0" : "reveal-hidden opacity-0 translate-y-3 blur-[2px]", className),
		children
	});
}
function Kicker({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: cn("font-mono text-xs tracking-cinema uppercase text-muted", className),
		children
	});
}
function SectionTitle({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: cn("text-section font-medium text-fg", className),
		children
	});
}
function Container({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className),
		children
	});
}
function Manifesto() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "manifesto",
		className: "scroll-mt-24 border-t border-border py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "West Coast Production" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-6 max-w-4xl text-section font-medium text-fg",
			children: SITE.manifesto
		})] }) })
	});
}
function Scale() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "craft",
		className: "scroll-mt-24 border-t border-border py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "The scale of capture" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
			className: "mt-4 max-w-3xl",
			children: "We work at the edge of the Atlantic"
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16 grid gap-12 md:grid-cols-3 md:gap-10",
			children: SCALE.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: i * 80,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-cinema text-steel",
						children: item.n
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 text-3xl font-medium text-fg",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-muted",
						children: item.body
					})
				]
			}, item.n))
		})] })
	});
}
function AtlanticLight() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate min-h-stage overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				className: "absolute inset-0 size-full object-cover",
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true,
				poster: "/cliffs.jpg",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
					src: "/atlantic.mp4",
					type: "video/mp4"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-bg/25" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
				className: "relative z-10 flex min-h-stage items-center py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "West Coast Production" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						className: "mt-4 max-w-xl",
						children: "Harnessing Atlantic light"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-10 max-w-md space-y-5",
						children: LIGHT_PILLARS.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-t border-border pt-5 text-lg text-fg",
							children: line
						}, line))
					})
				] })
			})
		]
	});
}
function Builders() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-border py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "West Coast Production" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionTitle, {
				className: "mt-4 max-w-3xl",
				children: [
					"We're cinematographers.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
						className: "font-serif font-normal italic text-steel",
						children: "We've captured the impossible."
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/operator.jpg",
					alt: "West Coast Production operator on an Irish cliff at blue hour",
					className: "img-frame h-72 w-full rounded-xl object-cover sm:h-shot"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/drone.jpg",
					alt: "Cinema camera drone in flight over the Atlantic",
					className: "img-frame h-72 w-full rounded-xl object-cover sm:h-shot"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-14 grid gap-0 sm:grid-cols-2",
				children: ACHIEVEMENTS.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "border-t border-border py-4 text-sm leading-relaxed text-muted sm:px-4 sm:odd:pl-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mr-3 font-mono text-xs tracking-label text-subtle",
						children: String(i + 1).padStart(2, "0")
					}), line]
				}, line))
			})
		] })
	});
}
function House() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/property.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-bg/80" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
				className: "relative z-10 py-28 sm:py-36",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "West Coast Production" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						className: "mt-4 max-w-3xl",
						children: "A production house built for air and earth"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-lg leading-relaxed text-muted",
						children: "Combining aerial cinematography, FPV, 360°, 8K stills and reels under one roof — licensed, insured, and based on the Atlantic edge."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						size: "cta",
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#work",
							children: "See the work"
						})
					})
				] })
			})
		]
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "scale",
		className: "scroll-mt-24 border-t border-border py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Scaling for massive capacity" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
			className: "mt-4 max-w-3xl",
			children: "Production at the scale of the west"
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16 grid gap-12 sm:grid-cols-3",
			children: STATS.map((stat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: i * 80,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-stat font-medium text-fg",
					children: stat.value
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm uppercase tracking-label text-muted",
					children: stat.label
				})]
			}, stat.value))
		})] })
	});
}
function GroundVsAir() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-border py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "West Coast Production" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
			className: "mt-4 max-w-3xl",
			children: "The Atlantic edge is the only scalable studio"
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16 grid gap-10 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xl font-medium text-muted",
				children: GROUND_VS_AIR.ground.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-0",
				children: GROUND_VS_AIR.ground.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-t border-border py-4 text-fg/80",
					children: item
				}, item))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 80,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-medium text-steel",
					children: GROUND_VS_AIR.air.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 space-y-0",
					children: GROUND_VS_AIR.air.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-t border-border-strong py-4 text-fg",
						children: item
					}, item))
				})]
			})]
		})] })
	});
}
function Services() {
	const [active, setActive] = (0, import_react.useState)(0);
	const current = SERVICES[active];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-border py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Producing for earth and Atlantic" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
			className: "mt-4 max-w-3xl",
			children: "Aerial. FPV. 360°. 8K stills. Reels."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-14 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col",
				children: SERVICES.map((service, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setActive(i),
					onMouseEnter: () => setActive(i),
					className: cn("border-t border-border py-5 text-left transition-colors duration-150 last:border-b", i === active ? "text-fg" : "text-muted hover:text-fg"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-2xl font-medium tracking-tight sm:text-3xl",
						children: service.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-sm text-muted",
						children: service.line
					})]
				}, service.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-xl bg-bg-elevated",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: current.image,
					alt: current.alt,
					className: "img-frame aspect-video w-full object-cover"
				}, current.id), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 sm:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs uppercase tracking-cinema text-steel",
						children: current.kicker
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-base leading-relaxed text-muted",
						children: current.body
					})]
				})]
			}) })]
		})] })
	});
}
function Work() {
	const [open, setOpen] = (0, import_react.useState)(null);
	const selected = open !== null ? WORK[open] : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "work",
		className: "scroll-mt-24 border-t border-border py-24 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Selected work" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
			className: "mt-4",
			children: "West Coast Production"
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: WORK.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setOpen(i),
				className: "group relative overflow-hidden rounded-xl text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: item.src,
					alt: item.alt,
					className: "img-frame aspect-photo w-full object-cover transition-transform duration-500 ease-out-quart group-hover:scale-[1.03]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg via-bg/50 to-transparent p-5 pt-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-fg",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-mono text-xs uppercase tracking-label text-steel",
						children: item.meta
					})]
				})]
			}, item.src))
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: open !== null,
			onOpenChange: (v) => !v && setOpen(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
				className: "p-2 sm:p-3",
				children: selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "sr-only",
						children: selected.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
						className: "sr-only",
						children: [
							selected.meta,
							". ",
							selected.alt
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: selected.src,
						alt: selected.alt,
						className: "img-frame aspect-video w-full rounded-lg object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-3 pb-3 pt-4 sm:px-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg font-medium text-fg",
							children: selected.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-mono text-xs uppercase tracking-label text-muted",
							children: selected.meta
						})]
					})
				] }) : null
			})
		})]
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		suppressHydrationWarning: true,
		className: cn("flex h-11 w-full rounded-md border border-border bg-bg-elevated px-3 text-sm text-fg", "placeholder:text-subtle transition-[border-color,box-shadow] duration-150", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		className: cn("text-xs font-medium uppercase tracking-label text-muted", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		suppressHydrationWarning: true,
		className: cn("flex min-h-32 w-full rounded-lg border border-border bg-bg-elevated px-3 py-3 text-sm text-fg", "placeholder:text-subtle transition-[border-color,box-shadow] duration-150", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
var schema = object({
	name: string().min(2, "Tell us who to reply to."),
	email: string().email("A real email helps us send the brief back."),
	type: string().min(1, "Pick a project type."),
	location: string().min(2, "Where are we flying?"),
	message: string().min(12, "A few lines on the shoot is enough.")
});
var empty = {
	name: "",
	email: "",
	type: "Hotel & Tourism",
	location: "",
	message: ""
};
function Contact() {
	const [fields, setFields] = (0, import_react.useState)(empty);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [sent, setSent] = (0, import_react.useState)(false);
	function set(key, value) {
		setFields((f) => ({
			...f,
			[key]: value
		}));
		setErrors((e) => ({
			...e,
			[key]: void 0
		}));
	}
	function onSubmit(e) {
		e.preventDefault();
		const parsed = schema.safeParse(fields);
		if (!parsed.success) {
			const next = {};
			for (const issue of parsed.error.issues) {
				const key = issue.path[0];
				if (typeof key === "string" && !next[key]) next[key] = issue.message;
			}
			setErrors(next);
			return;
		}
		const existing = JSON.parse(localStorage.getItem("wcp-inquiries") ?? "[]");
		existing.push({
			...parsed.data,
			at: (/* @__PURE__ */ new Date()).toISOString()
		});
		localStorage.setItem("wcp-inquiries", JSON.stringify(existing));
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "scroll-mt-24 border-t border-border py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-16 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "The next step" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					className: "mt-4",
					children: "Your reel starts on the west"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-md text-base leading-relaxed text-muted",
					children: "West Coast Production is licensed by the Irish Aviation Authority and fully insured. Hotels, tourism, property, commercial, FPV, 360° — one operation."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${SITE.phoneTel}`,
							className: "flex min-h-11 items-center gap-3 text-fg transition-colors hover:text-steel",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-steel" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-lg",
								children: SITE.phoneDisplay
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: SITE.instagram,
							target: "_blank",
							rel: "noreferrer",
							className: "flex min-h-11 items-center gap-3 text-fg transition-colors hover:text-steel",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-4 text-steel" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: SITE.instagramHandle })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: SITE.youtube,
							target: "_blank",
							rel: "noreferrer",
							className: "flex min-h-11 items-center gap-3 text-fg transition-colors hover:text-steel",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "size-4 text-steel" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "West Coast Production on YouTube" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-xs uppercase tracking-cinema text-muted",
							children: [
								SITE.location,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								SITE.coords
							]
						})
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 60,
				children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-h-80 flex-col justify-center rounded-xl border border-border bg-bg-elevated p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-8 text-steel" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-2xl font-medium text-fg",
							children: "Brief received."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-md text-muted",
							children: "West Coast Production has your shoot notes. Prefer to talk now?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "cta",
							className: "mt-8 w-fit",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:${SITE.phoneTel}`,
								children: ["Call ", SITE.phoneDisplay]
							})
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "space-y-5",
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Name",
							error: errors.name,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								name: "name",
								autoComplete: "name",
								value: fields.name,
								onChange: (e) => set("name", e.target.value),
								placeholder: "Your name"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							error: errors.email,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								name: "email",
								type: "email",
								autoComplete: "email",
								value: fields.email,
								onChange: (e) => set("email", e.target.value),
								placeholder: "you@studio.com"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Project type" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 gap-2 sm:grid-cols-3",
								children: PROJECT_TYPES.map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => set("type", type),
									className: cn("min-h-11 rounded-md border px-3 text-left text-sm transition-colors duration-150", fields.type === type ? "border-steel bg-fg/5 text-fg" : "border-border text-muted hover:text-fg"),
									children: type
								}, type))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Location",
							error: errors.location,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								name: "location",
								value: fields.location,
								onChange: (e) => set("location", e.target.value),
								placeholder: "Cliffs, hotel, estate, county…"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "The brief",
							error: errors.message,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								name: "message",
								value: fields.message,
								onChange: (e) => set("message", e.target.value),
								placeholder: "What are we capturing, and when?"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							size: "cta",
							className: "w-full sm:w-auto",
							children: "Send brief"
						})
					]
				})
			})]
		}) })
	});
}
function Field({ label, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }),
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: error
			}) : null
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/wcp-badge.png",
					alt: "",
					className: "size-14 rounded-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold uppercase tracking-label text-fg",
					children: "West Coast Production"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-serif italic text-muted",
					children: SITE.motto
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-xs uppercase tracking-label text-subtle",
				children: ["Ireland · ", SITE.coords]
			})]
		})
	});
}
function SitePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-svh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "film-grain",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Manifesto, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AtlanticLight, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Builders, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GroundVsAir, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SitePage, {});
}
//#endregion
export { Home as component };
