export default function SteamAnimation() {
  return (
    <svg className="steam-svg" viewBox="0 0 120 300" xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax meet" aria-hidden="true">
      <defs>
        <linearGradient id="sg1" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#F7F3EC" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#F7F3EC" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="sg2" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#C9A547" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#C9A547" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path className="steam-path steam-path--1"
        d="M60,300 C70,250 50,210 60,170 C70,130 55,90 60,50 C63,30 58,10 60,0"
        fill="none" stroke="url(#sg1)" strokeWidth="3" strokeLinecap="round" />
      <path className="steam-path steam-path--2"
        d="M40,300 C50,255 35,215 40,175 C45,135 35,95 40,55 C43,35 37,15 40,5"
        fill="none" stroke="url(#sg1)" strokeWidth="2.5" strokeLinecap="round" />
      <path className="steam-path steam-path--3"
        d="M80,300 C90,255 75,215 80,175 C85,135 75,95 80,55 C83,35 77,15 80,5"
        fill="none" stroke="url(#sg1)" strokeWidth="2.5" strokeLinecap="round" />
      <path className="steam-path steam-path--gold"
        d="M60,300 C65,260 55,225 60,190 C65,155 55,120 60,85"
        fill="none" stroke="url(#sg2)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
