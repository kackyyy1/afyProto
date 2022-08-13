
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Header/>
      </div>
      <main className="flex-1 max-w-4xl w-full mx-auto">
        {children}</main>
      <Footer />
    </>
  );
}

