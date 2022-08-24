
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {

  return (
    <div>
      <div className="sticky top-0 z-50">
        <Header className="clearfix"/>
      </div>
      <main className="w-full mx-auto">
        {children}
      </main>
      <div className="sticky bottom-0 m-auto z-50 md:max-h-screen">
        <Footer />
      </div>
    </div>
  );
}

