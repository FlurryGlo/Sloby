import '../utils/styles/globals.css'

import type {AppProps} from 'next/app'
import {Suspense, useState} from "react";
import {createBrowserSupabaseClient} from "@supabase/auth-helpers-nextjs";
import {SessionContextProvider} from "@supabase/auth-helpers-react";
import {ProjectsContextProvider} from '../utils/contexts/ProjectsContext';
import Loading from "../components/loading";

export default function App({Component, pageProps}: AppProps) {
    const [supabaseClient] = useState(() => createBrowserSupabaseClient())

    return (
        <ProjectsContextProvider>
            <SessionContextProvider
                supabaseClient={supabaseClient}
                initialSession={pageProps.initialSession}
            >
                <Suspense fallback={<Loading/>}>
                    <Component {...pageProps} />
                </Suspense>
            </SessionContextProvider>
        </ProjectsContextProvider>
    )
}