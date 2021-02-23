interface ConnectLinkProps {
  href: string;
  src: string;
  dataAos: string;
}

const Connect: React.FC = () => {
  const links = [
    {
      href: 'mailto:yuriy.nenakhov@gmail.com?subject=Hello',
      src: 'email-icon.png',
      dataAos: 'fade-right',
    },
    {
      href: 'tel:9178626512',
      src: 'phone-icon.png',
      dataAos: 'fade-up-right',
    },
    {
      href:
        'https://drive.google.com/file/d/15hsNe4rEQ0wsAkuzhhGiSHIbwH7RM7xV/view?usp=sharing',
      src: 'resume-icon.png',
      dataAos: 'fade-up',
    },
    {
      href: 'https://github.com/ynenakho',
      src: 'github-icon.png',
      dataAos: 'fade-up-left',
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
    return (
      <div data-aos={dataAos} data-aos-offset="50">
        <a href={href} target={target} rel={rel}>
          <img src={`/icons/${src}`} alt={src} />
        </a>
      </div>
    );
  };

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
