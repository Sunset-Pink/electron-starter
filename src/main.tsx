import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'

import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import {ThemeProvider} from "@/components/theme-provider.tsx";

const router = createRouter({
	routeTree,
	defaultPreload: 'intent',
	scrollRestoration: true,
})

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}

const rootElement: HTMLElement|null = document.getElementById('root');

if(rootElement == null) {
	throw new Error('Root not found.');
}

rootElement.classList.add('h-screen', 'w-screen')


ReactDOM.createRoot(rootElement!).render(
	<React.StrictMode>
		<ThemeProvider defaultTheme="dark" storageKey="ui-theme">
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>,
)