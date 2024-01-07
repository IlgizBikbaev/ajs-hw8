import { Team } from "../js/team.js";

test('add to the team', () => {
    const team = new Team();
    team.add('igrok');
    team.add('winner');

    const result = ['igrok', 'winner']

    expect(team.toArray()).toEqual(result);
})

test('error in the team', () => {
    const team2 = new Team();
    team2.add('igrok');
    team2.add('winner');

    expect(()=> team2.add('igrok')).toThrow('Объект уже существует');
})

test('add group to team', () => {
    const team3 = new Team();
    team3.add('igrok');
    team3.add('winner');
    team3.addAll('micro', 'macro');
    const result = ['igrok', 'winner', 'micro', 'macro'];

    expect(team3.toArray()).toEqual(result);
})
