import React from "react";
import '../../asssets/css/Header.css';


class Header extends React.Component {
  render(): JSX.Element {
    return (
      <header className="my-header">
        <div >
          <img 
            src="https://img.icons8.com/?size=512&id=t4YbEbA834uH&format=png"
            alt="react"
            className="HeaderIcon"
          />
        </div>
        <div>  
          <a className="HeaderA">REACT</a>
        </div>
      </header>
    );
  }
}
export default Header;
