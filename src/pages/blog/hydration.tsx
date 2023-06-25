import { NextPage } from "next";
import { Layout } from "../../layouts/default";
import Seo from "../../components/general/Seo";
import CTA from "../../components/general/CTA";
import Hero from "../../components/post/Hero";
import Main from "../../components/post/Main";
import Link from "next/link";

const Hydration: NextPage = () => {
  const blogData = [
    {
      id: 1,
      header: `How Much Water Should You Be Drinking Every Day?`,
      body: (
        <div>
          <p className="my-3">
            There's no one-size-fits-all answer to this question, as the amount
            of water each person needs can vary depending on factors such as
            age, sex, weight, activity level, and climate. However, a general
            guideline is to aim for eight 8-ounce glasses of water per day, also
            known as the "8x8" rule. This equates to about 2 liters, or half a
            gallon, of water per day. However, some people may need more or less
            depending on their individual needs.
          </p>
          <p className="my-3">
            It's also important to note that water isn't the only source of
            hydration. Other beverages such as tea, coffee, and milk, as well as
            foods with high water content like fruits and vegetables, can also
            contribute to your overall fluid intake.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      header: `The Benefits of Staying Hydrated`,
      body: (
        <div>
          <p className="my-3">
            <span className="font-bold">
              Helps Maintain Physical Performance:
            </span>{" "}
            Being properly hydrated helps regulate body temperature, lubricates
            joints, and supports healthy muscle function, which can improve
            physical performance during exercise or sports activities.
          </p>
          <p className="my-3">
            <span className="font-bold">Promotes Healthy Digestion:</span> Water
            helps break down food and supports healthy digestion. It can also
            prevent constipation and promote regular bowel movements.
          </p>
          <p className="my-3">
            <span className="font-bold">Supports Healthy Skin:</span> Drinking
            enough water can help keep your skin hydrated and healthy-looking,
            as well as prevent dryness and flakiness.
          </p>
          <p className="my-3">
            <span className="font-bold">Boosts Energy Levels:</span> Dehydration
            can lead to fatigue and decreased cognitive function. Staying
            hydrated can help you feel more alert and energized throughout the
            day.
          </p>
          <p className="my-3">
            <span className="font-bold">Supports Kidney Function:</span> Water
            helps flush waste and toxins from the body, which can help support
            healthy kidney function.
          </p>
          <p className="my-3">
            <span className="font-bold">Helps Regulate Appetite:</span> Staying
            hydrated can help regulate your appetite and prevent overeating, as
            thirst can sometimes be mistaken for hunger.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      header: `Conclusion`,
      body: (
        <div>
          <p className="my-3">
            In conclusion, staying properly hydrated is essential for
            maintaining good health. While the amount of water each person needs
            can vary, a general guideline is to aim for 2 liters of water per
            day. In addition to supporting physical performance, digestion, and
            skin health, staying hydrated can also boost energy levels, support
            kidney function, and regulate appetite. So, make sure to drink
            plenty of water throughout the day to keep your body functioning at
            its best!
          </p>
          <p className="my-3">
            Do you like what you read here? Please drop your comments under our
            social media handles and if you have further questions{" "}
            <Link legacyBehavior href="https://patient.stabledoc.com/auth">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold text-primary cursor-pointer"
              >
                Click here
              </a>
            </Link>{" "}
            to speak with one of our doctors via our telehealth platforms.
          </p>
        </div>
      ),
    },
  ];
  return (
    <Layout>
      <Seo templateTitle="Benefits Of Drinking Water: How Much Do You Need In A Day?" />
      <Hero
        title="Benefits Of Drinking Water: How Much Do You Need In A Day?"
        datePosted="April 11, 2023"
        author="Dr Isaac Agada"
      />
      <Main
        blogImage="/img/blog-images/drinking-water.jpg"
        summary={`How Much Water Should You Be Drinking Every Day and What Are the Benefits?. 
        Water is essential for our survival, and staying hydrated is crucial for maintaining 
        good health. Our bodies are made up of about 60% water, and we need to constantly 
        replenish our fluid levels to function properly. In this blog post, we'll explore the 
        importance of hydration, how much water you should be drinking every day, and the 
        benefits of staying hydrated.`}
        blogData={blogData}
      />
      <CTA />
    </Layout>
  );
};
export default Hydration;