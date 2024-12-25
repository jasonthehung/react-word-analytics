type StatsProps = {
  numberOfWords: number;
  numberOfCharacters: number;
  instagramCharacterLeft: number;
  facebookCharacterLeft: number;
};

export default function Stats({ stats }: { stats: StatsProps }) {
  return (
    <section className="stats">
      <Stat number={stats.numberOfWords} label="Words" />
      <Stat number={stats.numberOfCharacters} label="Characters" />
      <Stat number={stats.instagramCharacterLeft} label="Instagram" />
      <Stat number={stats.facebookCharacterLeft} label="Facebook" />
    </section>
  );
}

type StatProps = {
  number: number;
  label: string;
};

function Stat({ number, label }: StatProps) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
