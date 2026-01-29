import { Routes } from "@angular/router";
import { Chat } from "./chat/chat";
import { Calendar } from "./calendar/calendar";
import { Email } from "./email/email";
import { Notes } from "./notes/notes";

export const APPS_ROUTES: Routes = [
    {
        path: 'apps/chat',
        component : Chat,
        title: 'Chat',
    },
    {
        path: 'apps/calendar',
        component : Calendar,
        title: 'Calendar',
    },
    {
        path: 'apps/email',
        component : Email,
        title: 'Mailbox',
    },
    {
        path: 'apps/notes',
        component : Notes,
        title: 'Notes',
    }
]