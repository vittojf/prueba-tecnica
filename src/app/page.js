"use client";
import About from "@/components/About/About";
import ContactForm from "@/components/ContactForm/ContactForm";
import Header from "@/components/Header/Header";
import Interests from "@/components/Interests/Interests";
import style from "./page.module.css";
import Divider from "@/components/Divider/Divider";
import useUser from "@/hooks/useUser";
import Spinner from "@/components/Spinner/Spinner";

const Home = () => {
  const { data, loading } = useUser();
  return (
    <main className={style.main}>
      
      <Header loading={loading} name={data.name} profileImage={`${data.avatar}`} />
      <div className={loading?style.containerLoading:style.container}>
        {loading ? (
      
            <Spinner />
         
        ) : (
          <>
            <About description={data.about} />
            <Divider />
            <Interests interests={data.interests} />
            <Divider />
            <ContactForm />
          </>
        )}
      </div>
    </main>
  );
};

export default Home;
