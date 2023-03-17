interface JokeReport {
    joke: string;
    score: number;
    date: string;
}
declare const reportJokes: JokeReport[];
declare let currentScore: number;
declare let currentJoke: string;
declare let nextJoke: string;
declare const scores: HTMLElement | null;
declare const score1Button: HTMLElement | null;
declare const score2Button: HTMLElement | null;
declare const score3Button: HTMLElement | null;
declare const fetchJoke: () => void;
declare const fetchWeather: () => void;
