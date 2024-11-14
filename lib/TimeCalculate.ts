const TimeCalculator = (Time: number) => {
  const Hours = Math.floor(Time / 3600);
  const Minits = Math.floor((Time % 3600) / 60);
  const Secound = Math.floor(Time % 60);

  const calculateHours = Hours > 0 ? `${Hours}:` : '';
  const calculateminits = `${Minits < 10 && Hours > 0 ? '0' : ''}${Minits}:`;
  const calculateSecond = `${Secound < 10 && Secound > 0 ? '0' : ''}${Secound}`;
  return `${calculateHours}${calculateminits}${calculateSecond}`;
};

export default TimeCalculator;
