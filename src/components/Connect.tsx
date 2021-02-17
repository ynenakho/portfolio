const Connect: React.FC = () => {
  return (
    <div className="section connect">
      <h2>Connect With Me</h2>
      <a
        href="mailto:yuriy.nenakhov@gmail.com?subject=Hello"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/icons/email-icon.png" alt="email-icon" />
      </a>
      <a href="tel:9178626512">
        <img src="/icons/phone-icon.png" alt="phone-icon" />
      </a>
      <a
        href="https://drive.google.com/file/d/15hsNe4rEQ0wsAkuzhhGiSHIbwH7RM7xV/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/icons/resume-icon.png" alt="resume-icon" />
      </a>
      <a href="https://github.com/ynenakho" target="_blank" rel="noreferrer">
        <img src="/icons/github-icon.png" alt="github-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/yuriy-nenakhov/"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/icons/linkedin-icon.png" alt="linkedin-icon" />
      </a>
    </div>
  );
};

export default Connect;
