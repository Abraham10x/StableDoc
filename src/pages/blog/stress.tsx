import { NextPage } from "next";
import { Layout } from "../../layouts/default";
import Seo from "../../components/general/Seo";
import CTA from "../../components/general/CTA";
import Hero from "../../components/post/Hero";
import Main from "../../components/post/Main";
import Link from "next/link";

const Diabetes: NextPage = () => {
  const blogData = [
    {
      id: 1,
      body: (
        <div>
          <p className="my-3">
            Stress is a common problem that many people face on a daily basis.
            Whether it's due to work, family responsibilities, or personal
            issues, stress can have a negative impact on our physical and mental
            health. If left unchecked, stress can lead to anxiety and other
            health problems. Here are some stress management techniques that can
            help you manage stress and anxiety:
          </p>
          <p className="my-3">
            <span className="font-bold">Exercise:</span> Regular exercise is a
            great way to reduce stress and anxiety. Exercise helps to release
            endorphins, which are the body's natural feel-good chemicals. It
            also helps to improve your overall health and well-being, which can
            reduce the impact of stress on your body.
          </p>
          <p className="my-3">
            <span className="font-bold">Mindfulness meditation:</span>{" "}
            Mindfulness meditation is a technique that involves paying attention
            to the present moment without judgment. This can help you become
            more aware of your thoughts and feelings, which can help you manage
            stress and anxiety more effectively.
          </p>
          <p className="my-3">
            <span className="font-bold">Deep breathing exercises:</span> Deep
            breathing exercises are a simple and effective way to reduce stress
            and anxiety. When you take deep breaths, you signal to your body
            that it's time to relax, which can help reduce the impact of stress
            on your body.
          </p>
          <p className="my-3">
            <span className="font-bold">Get enough sleep:</span> Getting enough
            sleep is essential to managing stress and anxiety. Lack of sleep can
            make you more susceptible to stress, and it can also make it harder
            to manage your emotions.
          </p>
          <p className="my-3">
            <span className="font-bold">Eat a healthy diet:</span> Eating a
            healthy diet is another important way to manage stress and anxiety.
            Make sure to eat a balanced diet that includes plenty of fruits and
            vegetables, whole grains, and lean protein.
          </p>
          <p className="my-3">
            <span className="font-bold">Practice yoga:</span> Yoga is a physical
            and mental practice that can help reduce stress and anxiety. It
            combines physical postures with deep breathing and meditation to
            help you relax and reduce stress.
          </p>
          <p className="my-3">
            <span className="font-bold">Talk to someone:</span> Sometimes,
            talking to someone can help you manage stress and anxiety. Whether
            it's a friend, family member, or a healthcare professional, talking
            to someone can help you process your emotions and find new ways to
            manage stress.
          </p>
          <p className="my-3">
            In conclusion, managing stress and anxiety is essential to
            maintaining good physical and mental health. By using these stress
            management techniques, you can reduce the impact of stress on your
            body and mind. Remember, it's important to find the techniques that
            work best for you, and to practice them regularly to reap the full
            benefits.
          </p>
          <p className="my-3">
            Do you wish to speak with a healthcare professional for further
            help?{" "}
            <Link legacyBehavior href="https://patient.stabledoc.com/auth">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold text-primary cursor-pointer"
              >
                Click here
              </a>
            </Link>
          </p>
        </div>
      ),
    },
  ];
  return (
    <Layout>
      <Seo templateTitle="Dealing With Stress And Anxiety" />
      <Hero
        title="Dealing With Stress And Anxiety"
        datePosted="April 13, 2023"
        author="Dr Benjamin Idoko"
      />
      <Main
        blogImage="/img/blog-images/stress.jpg"
        summary={`Stress is a common problem that many people face on a daily basis. Whether 
        it's due to work, family responsibilities, or personal issues, stress can have a 
        negative impact on our physical and mental health. If left unchecked, stress 
        can lead to anxiety and other health problems`}
        blogData={blogData}
      />
      <CTA />
    </Layout>
  );
};
export default Diabetes;
