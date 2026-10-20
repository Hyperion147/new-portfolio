"use client";

import { useEffect, useState } from "react";

const API_URL =
    "https://github-contributions-api.jogruber.de/v4/Hyperion147?y=last";

export interface GithubContributionDay {
    date: string;
    count: number;
    level: number;
}

export interface GithubContributionsData {
    total: {
        lastYear: number;
        [range: string]: number;
    };
    contributions: GithubContributionDay[];
}

// Shared fetch for the GitHub contributions API (last year).
const useGithubContributions = () => {
    const [data, setData] = useState<GithubContributionsData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        const fetchGithubData = async () => {
            setLoading(true);

            try {
                const res = await fetch(API_URL, {
                    cache: "no-store",
                    signal: controller.signal,
                });
                const githubData: GithubContributionsData = await res.json();
                setData(githubData);
            } catch (err) {
                if (
                    !(err instanceof DOMException) ||
                    err.name !== "AbortError"
                ) {
                    console.error("Error fetching github data:", err);
                    setData(null);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        };

        fetchGithubData();

        return () => controller.abort();
    }, []);

    return { data, loading };
};

export default useGithubContributions;
