import { Routes } from "@angular/router";
import { Pricing } from "./pages/pricing/pricing";
import { Faqs } from "./pages/faqs/faqs";
import { Timeline } from "./pages/timeline/timeline";

export const EXTRA_ROUTES: Routes = [
    {
        path: 'pages/pricing',
        component: Pricing,
        title: 'Pricing',
    },
    {
        path: 'pages/faqs',
        component: Faqs,
        title: 'FAQs',
    },
    {
        path: 'pages/timeline',
        component: Timeline,
        title: 'Timeline',
    }
]