function Header(props) {
  return (
    <div className="container-fluid text-bg-dark p-3">
      <div className="container text-center">
        <header>
          <h1>
            {props.title} {props.children}
          </h1>
        </header>
      </div>
    </div>
  );
}

export default Header;
