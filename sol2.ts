type Team = {
    name: string;
    score: number;
};

export function tournamentWinner(competitions: [string, string][], results: boolean[]): string {
    const winners = new Map<string, number>();
    const currentWinner: Team = { name: '', score: 0 };

    for (let idx = 0; idx < competitions.length; idx++) {
        const side = results[idx] ? 0 : 1;
        const winningTeam = competitions[idx][side];

        winners.set(winningTeam, (winners.get(winningTeam) || 0) + 3);

        if (currentWinner.score < (winners.get(winningTeam) || 0)) {
            currentWinner.score = winners.get(winningTeam) || 0;
            currentWinner.name = winningTeam;
        }
    }

    return currentWinner.name;
}
