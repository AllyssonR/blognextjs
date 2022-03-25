import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <div>
        <Image
          src="/images/Logo"
          width={238.62}
          height={25.63}
          alt="spacetraveling"
        />
      </div>
    </header>
  );
}
