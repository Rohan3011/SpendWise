import Features from "./Features";
import Footer from "./Footer";
import Home from "./Home";
import Resoures from "./Resoures";

const IndexBody = () => {
  return (
    <div className="mt-12 flex flex-col">
      <Home />
      <Features />
      <Resoures />
      <Footer />
    </div>
  )
}

export default IndexBody;
