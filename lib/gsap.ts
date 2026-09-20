import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registered once for the whole app; importing this module is what wires the plugin up.
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };
