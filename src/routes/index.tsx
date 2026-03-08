import {
    createFileRoute
} from "@tanstack/react-router";
import { ReactNode } from "react";

const RootComponent = (): ReactNode => {
    return (
        <div>
            <h3>Welcome home!</h3>
        </div>
    )
}

export const Route = createFileRoute('/')({
    component: RootComponent,
})

