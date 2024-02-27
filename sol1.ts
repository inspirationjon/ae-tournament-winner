export function tournamentWinner(competitions: string[][], results: number[]) {

    const winners = new Map()

    let currentWinner = {
        name: '',
        score: 0,
    }
    for (let idx = 0; idx < competitions.length; idx++) {

        let side = 1

        if (results[idx]) {
            side = 0
        }

        winners.set(competitions[idx][side], winners.has(competitions[idx][side]) ? winners.get(competitions[idx][side]) + 3 : 3)

        if (currentWinner.score < winners.get(competitions[idx][side])) {

            currentWinner.score = winners.get(competitions[idx][side])
            currentWinner.name = competitions[idx][side]
        }
    }
    return currentWinner.name
}
