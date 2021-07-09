import Logo from 'components/Utilities/Logo';

const EntryHelper = (props) => {
  return (
    <div className="entry-helper">
      <div className="entry-helper__logo">
        <Logo />
      </div>
      <div className="entry-helper--text text--big">{props.text}</div>
      <div className="entry-helper--btn">{props.children}</div>
    </div>
  );
};

export default EntryHelper;
