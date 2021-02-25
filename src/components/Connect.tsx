import { Link } from 'react-router-dom';

interface ConnectLinkProps {
  href: string;
  src: string;
  dataAos: string;
}

const links = [
  {
    href: 'mailto:yuriy.nenakhov@gmail.com?subject=Hello',
    src: 'email-icon.png',
    dataAos: 'fade-right',
  },
  {
    href: 'tel:9178626512',
    src: 'phone-icon.png',
    dataAos: 'fade-down-right',
  },
  {
    href:
      'https://drive.google.com/file/d/15hsNe4rEQ0wsAkuzhhGiSHIbwH7RM7xV/view?usp=sharing',
    src: 'resume-icon.png',
    dataAos: 'fade-down',
  },
  {
    href: 'https://github.com/ynenakho',
    src: 'github-icon.png',
    dataAos: 'fade-down-left',
  },
  {
    href: 'https://www.linkedin.com/in/yuriy-nenakhov',
    src: 'linkedin-icon.png',
    dataAos: 'fade-left',
  },
];

const ConnectLink: React.FC<ConnectLinkProps> = ({ href, src, dataAos }) => {
  const target = href === 'tel:9178626512' ? '' : '_blank';
  const rel = href === 'tel:9178626512' ? '' : 'noreferrer';

  const handleClick = (target: string) => {
    const name = target.split('-')[0];
    window.analytics.logEvent('clickLink', { name });
  };

  // if (src === 'resume-icon.png') {
  //   return (
  //     <div data-aos={dataAos} data-aos-offset="50" onClick={() => handleClick(src)}>
  //       <Link to="/resume">
  //         <img src={`/icons/${src}`} alt={src} />
  //       </Link>
  //     </div>
  //   );
  // }
  return (
    <div
      data-aos={dataAos}
      data-aos-offset="50"
      onClick={() => handleClick(src)}
    >
      <a href={href} target={target} rel={rel}>
        <img src={`/icons/${src}`} alt={src} />
      </a>
    </div>
  );
};

const Connect: React.FC = () => {
  return (
    <div className="section connect">
      <h2>Connect With Me</h2>
      <div className="connect-container">
        {links.map(({ src, href, dataAos }) => (
          <ConnectLink src={src} href={href} key={src} dataAos={dataAos} />
        ))}
      </div>
    </div>
  );
};

export default Connect;
