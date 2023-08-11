import React, { Component, ReactNode } from "react";
import Header from '../../components/Header/Header.tsx';
import Footer from '../../components/Footer/Footer.tsx';

type Props = {
  children: ReactNode;
};
class Layout extends Component<Props> {
  render(): JSX.Element {
    return (
      <>
        <Header />
        <main>{this.props.children}</main>
        <Footer />
      </>
    );
  }
}
export default Layout;