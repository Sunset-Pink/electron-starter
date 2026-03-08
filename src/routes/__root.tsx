import {
    Link,
    Outlet,
    createRootRoute
} from "@tanstack/react-router";
import {
    TanStackRouterDevtools
} from "@tanstack/react-router-devtools"
import "../styles.css";
import { Toaster } from "@/components/ui/sonner.tsx";


const Root = () => {
    return (
        <>
            <div
                id="root-content"
                className="w-screen h-screen"
            >
                <Outlet />
            </div>
            <div id="protal-root"></div>
            <Toaster />
            <TanStackRouterDevtools />
        </>
    )
}

export const Route = createRootRoute({
    component: Root,
    notFoundComponent: () => {
        return (
            <div>
                <p>This page is not found.</p>
                <Link to="/">Home</Link>
            </div>
        )
    }
})

